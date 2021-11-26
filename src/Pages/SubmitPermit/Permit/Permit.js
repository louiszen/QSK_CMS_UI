import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Accessor, ColorX, LocaleX, QueryString, STORE } from 'IZOArc/STATIC';
import { HStack, Spacer, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Typography } from '@mui/material';
import PermitForm from 'Mods/PermitForm';
import HTMLReactParser from 'html-react-parser';
import { ArrowBack, Warning } from '@material-ui/icons';
import { DOMAIN } from '__SYSDefault/Domain';
import axios from 'axios';
import _ from 'lodash';
import { Box } from '@mui/system';
import { StyledButton } from 'IZOArc/LabIZO/Stylizo';
import { IZOTheme } from '__SYSDefault/Theme';
import Formizo from 'IZOArc/LabIZO/Formizo';
import PermitAPI from 'Mods/PermitAPI';

/**
 * @augments {Component<Props, State>}
 */
class Permit extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates(() => {
      let qS = QueryString.Parse(this.props.location.search);
      this.setState({
        permitRefID: qS.id,
        permitForm: PermitForm[qS.id]
      }, async () => {
        let permitDoc = await PermitAPI.GetDoc(qS.id);
        this.setState({
          permitDoc: permitDoc
        });
      });
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Permit.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), callback);
  }

  Back = () => {
    this.props.history.goBack();
  }

  GetDoc = async (permitRefID) => {
    let { addOns } = this.props;
    let reqPath = "/Tables/Permits/Get";
    let url = DOMAIN + reqPath;
    let payloadOut = {
      JWT: STORE.user.JWT,
      data: {
        docID: permitRefID
      },
      addOns: addOns,
    };
    try {
    
      STORE.isLoading(true);
      let res = await axios.post(url, payloadOut);
      STORE.isLoading(false);

      console.log(reqPath, res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        this.setState({
          permitDoc: payload
        });
      } else {
        this.setState({
          permitDoc: null
        });
      }
    } catch (e) {
      STORE.isLoading(false);
    }
  }

  SubmitForm = {
    onClick: async (formsProps) => {
      STORE.Ask(LocaleX.Get("AskConfirm.title"), LocaleX.Get("AskConfirm.content"), async () => this.SubmitForm.onConfirm(formsProps));
    },
    onConfirm: async (formsProps) => {
      let { permitRefID } = this.state;
      let { addOns } = this.props;
      let reqPath = "/Data/Permit/Submit"
      let url = DOMAIN + reqPath;
      let payloadOut = {
        JWT: STORE.user.JWT,
        data: {
          permitRefID: permitRefID,
          formData: {
            ...formsProps
          }
        },
        addOns: addOns,
      };
      try {
        let res = await axios.post(url, payloadOut);
        console.log(reqPath, res.data);
      
        let { Success, payload } = res.data;
          
        if (Success === true) {
          this.SubmitForm.onSuccess(payload);
        } else {
          this.SubmitForm.onFail();
        }
      } catch (e) {
        this.SubmitForm.onFail();
      }
    },
    onSuccess: (payload) => {
      STORE.Pop(
        LocaleX.Get("Application.success.title"), 
        LocaleX.Get("Application.success.message", {refID: payload}), 
        () => {
          this.Back();
          STORE.clearAsk();
        });
    },
    onFail: () => {
      STORE.Pop(
        LocaleX.Get("Application.fail.title"), 
        LocaleX.Get("Application.fail.message"));
    }
  }

  renderNotFound(){
    return (
      <VStack height="100%">
        <Spacer/>
        <VStack height="fit-content" spacing={20}>
          <Warning style={{fontSize: 150, color: ColorX.GetColorCSS("Warn")}}/>
          <VStack>
            {HTMLReactParser(LocaleX.Get("Permit.NotFound"))}
          </VStack>
        </VStack>
        <Spacer/>
      </VStack>
    )
  }

  renderBackBar(){
    return (
      <HStack>
        {this.renderPermitName()}
        <Spacer/>
        <StyledButton theme={{
          color: "white", 
          background: ColorX.GetColorCSS(IZOTheme.menuFG),
          hover: {
            background: ColorX.GetColorCSS(IZOTheme.menuBG)
          },
          boxShadow: "transparent",
          borderRadius: "0px"
          }}  
          onClick={() => {
            this.Back();            
          }}>
          <ArrowBack/>
        </StyledButton>
      </HStack>
    );
  }

  renderPermitName(){
    let {permitDoc} = this.state;
    return (
      <Box height="100%" background="#f9ffff">
        <HStack>
          <Typography style={{
            textAlign: "left", 
            fontFamily: "Segoe UI",
            fontSize: 22,
            color: ColorX.GetColorCSS(IZOTheme.menuFG),
            marginRight: 10
            }}>
            {permitDoc.name[STORE.lang]}
          </Typography>
        </HStack>
      </Box>
    )
  }

  renderPermitForm(){
    let {permitForm, permitDoc} = this.state;
    if(!_.isArray(permitDoc.steps) || permitDoc.steps.length < 1){
      throw Error();
    }
    let formKey = permitDoc.steps[0].form;
    let formSchema = permitForm[formKey];

    return (
      <Formizo
        width={700}
        height="100%"
        schema={formSchema}
        onSubmit={this.SubmitForm.onClick}
        onCancel={this.Back}
        fieldStyle="standard"
        />
    );
    
  }

  render(){
    let {permitRefID, permitForm, permitDoc} = this.state;
    if(!permitRefID || !permitForm || !permitDoc){
      return this.renderNotFound();
    }
    try{
      return (
        <VStack height="100%" padding={2}>
          {this.renderBackBar()}
          {this.renderPermitForm()}
        </VStack>
      );
    }catch{
      return (
        <VStack height="100%" padding={2}>
          {this.renderBackBar()}
          {this.renderNotFound()}
        </VStack>
      );
    }
  }

}

export default observer(Permit);
