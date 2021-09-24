import React, { Component } from 'react';
import { Accessor, Authority, store, ColorX } from 'IZOArc/STATIC';

import { Typography, Box } from '@material-ui/core';
import { Denied } from 'IZOArc/Fallback';
import Formizo from 'IZOArc/LabIZO/Formizo';
import { DOMAIN, IZOTheme } from '__Base/config';
import axios from 'axios';

import schema from './schema';
import { VStack } from 'IZOArc/LabIZO/Stackizo';

/**
 * @augments {Component<Props, State>}
 */
class Landing extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates(async () => {
      await this.getIconList();
      await this.getLandingConfig();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Landing.defaultProps))){
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

  getIconList = async () => {
    let { addOns } = this.state;
    let url = DOMAIN + "/Tables/IconDocs/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/IconDocs/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        this.setState((state, props) => ({
          addOns: {
            ...state.addOns,
            icons: docs
          }
        }));
      } else {
        store.Alert("Cannot get icon list", "error");
      }
    } catch (e) {
      store.Alert("Cannot get icon list", "error");
    }
  }

  getLandingConfig = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Config/Landing/Info";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      store.isLoading(true);
      let res = await axios.post(url, payloadOut);
      console.log("/Config/Landing/Info", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        this.setState({
          doc: payload
        }, () => {
          store.isLoading(false);
        });
      } else {
        store.isLoading(false);
        store.Alert("Cannot get Landing Config", "error");
      }
    } catch (e) {
      store.isLoading(false);
      store.Alert("Cannot get Landing Config", "error");
    }
  }
  
  Config = {
    onSubmit: async (formProps) => {
      let { addOns } = this.props;
      let url = DOMAIN + "/Config/Landing/Edit";
      let payloadOut = {
        JWT: store.user.JWT,
        data: formProps,
        addOns: addOns,
      };
      try {
        let res = await axios.post(url, payloadOut);
        console.log("/Config/Landing/Edit", res.data);
      
        let { Success } = res.data;
      
        if (Success === true) {
          store.Alert("Edit Landing Config Successful", "success");
          this.getLandingConfig();
        } else {
          store.Alert("Edit Landing Config Failed", "error");
        }
      } catch (e) {
        store.Alert("Edit Landing Config Failed", "error");
      }
    }
  }

  renderFormizo() {
    let {doc, addOns} = this.state;
    return (
      <Formizo
        schema={schema.Landing}
        defaultValue={doc}
        buttons={["Revert", "Submit"]}
        onSubmit={this.Config.onSubmit}
        labelXS={2}
        addOns={addOns}
        />
    );
  }

  render(){
    if(!Authority.IsAccessibleQ("Landing")) return <Denied/>;
    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS(IZOTheme.foreground)
            }}>
            {"Landing Page & Main Settings"}
          </Typography>
        </Box>
        {this.renderFormizo()}
      </VStack>
    );
  }

}

export default Landing;
