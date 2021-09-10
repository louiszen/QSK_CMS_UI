import React, { Component } from 'react';
import PropsType from 'prop-types';

import _ from 'lodash';

import tabs from './tabs';

import { Accessor, Authority, ColorX, store } from 'IZOArc/STATIC';
import { VStack, HStack } from 'IZOArc/LabIZO/Stackizo';
import { DOMAIN } from '__Base/config';
import axios from 'axios';
import FlowizoWrap from './_gears/FlowizoWrap';
import { StyledButton } from 'IZOArc/LabIZO/Stylizo';
import Formizo from 'IZOArc/LabIZO/Formizo';
import { v1 } from 'uuid';

/** 
tabs = [
  {
    label: String,
    icon: String | JSX,
    reqAuth: String,
    render: JSX,
    iconPos: "top" | "left" | "right" | "bottom",
    noTransform: Boolean | false,
    spacing: Number | 5,
    alignment: "center" | "left" | "right"
  }
];
*/

/**
 * @augments {Component<Props, State>}
 */
class FlowEditor extends Component {

  static propTypes = {
    docID: PropsType.string,
    doc: PropsType.object,
    onQuit: PropsType.func, 
    onQuitRefresh: PropsType.func,
    renderFormizo: PropsType.func,
    data: PropsType.object,
    ibase: PropsType.object,
    onSubmit: PropsType.func,
    auth: PropsType.object,
    level: PropsType.number,
    formizo: PropsType.object
  }

  static defaultProps = {
    docID: "",
    doc: {},
    onQuit: null,
    onQuitRefresh: null,
    renderFormizo: null,
    data: {},
    ibase: {},
    onSubmit: null,
    auth: {},
    level: 999,
    formizo: {}
  }

  constructor(){
    super();
    this.state = {
      selectedTab: 0
    };
  }

  componentDidMount(){
    Authority.Require("");
    this._setAllStates(() => {
      this._getSeverity();
      this._getQuestions();
      this._getAnswers();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(FlowEditor.defaultProps))){
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

  _getSeverity = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/SevGroup/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/SevGroup/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let ids = _.map(payload.docs, (o, i) => o.severity);
        ids = _.uniq(ids);
        this.setState({
          Severity: ids
        });
      } else {
        store.Alert("Cannot get severity.", "error");
      }
    } catch (e) {
      store.Alert("Cannot get severity.", "error");
    }
  }

  _getQuestions = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/Question/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/Question/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        docs = _.unionBy(docs, (o, i) => o.refID);
        this.setState({
          Questions: docs
        });
      } else {
        store.Alert("Cannot get questions", "error");
      }
    } catch (e) {
      store.Alert("Cannot get questions", "error");
    }
  }

  _getAnswers = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/ArrivalAns/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/ArrivalAns", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        docs = _.unionBy(docs, (o, i) => o.refID);
        this.setState({
          Answers: docs
        });
      } else {
        store.Alert("Cannot get answers", "error");
      }
    } catch (e) {
      store.Alert("Cannot get answers", "error");
    }
  }

  _getTabs = () => {
    let {Severity, Questions, Answers} = this.state;
    let {doc} = this.props;
    console.log(Severity);
    return tabs(Severity, this.onDataUpdated, {Questions, Answers}, doc);
  }

  onDataUpdated = (data) => {
    console.log("onDataUpdated", data);
    this.setState({
      data: data
    });
  }

  /*
  onChangeTab = (e, tab) => {
    this.setState({
      selectedTab: tab
    });
  }

  renderTabPanels(){
    let {selectedTab, addOns} = this.state;
    let displayTabs = this._getTabs();
    return _.map(displayTabs, (o, i) => {
      return (
        <Box key={i} hidden={selectedTab !== i} style={{width: "100%", height: "100%"}}>
          {_.isFunction(o.render)? o.render(addOns) : o.render}
        </Box>
      );
    });
  }

  renderTabButtons(){
    let displayTabs = this._getTabs();
    return _.map(displayTabs, (o, i) => {
      if(Authority.IsAccessibleQ(o.reqAuth, o.reqLevel, o.reqFunc)){
        let label = o.label;
        let icon = o.icon;
        if(o.noTransform){
          label = <Typography style={{textTransform: 'none'}}>{o.label}</Typography>
        }
        switch(o.iconPos){
          case "top": default: 
            break;
          case "bottom":
            label = <VStack spacing={o.spacing || 5}>{label}{icon}</VStack>; 
            icon = null; break;
          case "left": 
            label = <HStack spacing={o.spacing || 5}>
              {o.alignment === "right" && <Spacer/>}
              {icon}{label}
              {o.alignment === "left" && <Spacer/>}
              </HStack>; 
            icon = null; break;
          case "right":
            label = <HStack spacing={o.spacing || 5}>
              {o.alignment === "right" && <Spacer/>}
              {label}{icon}
              {o.alignment === "left" && <Spacer/>}
              </HStack>; 
            icon = null; break;
        }
        return (
          <Tab key={i} label={label} icon={icon} disabled={o.disabled} style={{minHeight: 20, minWidth: 200}}/>
        );
      }
    });
  }
  */
  onMountFlowizo = (callbacks) => {
    this.MountFlowizo = callbacks;
  }

  _onSubmit = async (formsProps) => {
    console.log("onSubmit");

    let {data} = this.state;
    let {onSubmit} = this.props;
    console.log(formsProps);

    
    Accessor.Set(formsProps, "flow", data);
    if(onSubmit){
      await onSubmit(formsProps);
    }

  }

  _onRevert = () => {
    console.log("onRevert");
  }

  renderInfo = () => {
    let {ibase, doc, addOns, auth, level, formizo} = this.props;
    console.log(ibase);
    return <Formizo
      schema={ibase.schema}
      formID={v1()}
      buttons={ibase.buttons || []}
      buttonAlign="right"
      readOnly={ibase.readOnly}
      onMounted={this.onMountFormizo}
      defaultValue={doc}
      onSubmit={this._onSubmit}
      addOns={addOns}
      auth={auth}
      level={level}
      {...formizo}
      />
  }

  renderButtons = () => {
    return (
      <HStack>
        <StyledButton className={"formizo-h-m"} key={4} 
          theme={{ 
            color: "orange", 
            background: "white", 
            boxShadow: ColorX.GetBoxShadowCSS("grey"),
            width: 120 
            }} onClick={this._onRevert}>
          <i className='fas fa-history' />
          <div className='formizo-h-m'>Revert</div>
        </StyledButton>
        <StyledButton className={"formizo-h-m"} key={1} 
          theme={{ 
            color: "green", 
            background: "white", 
            boxShadow: ColorX.GetBoxShadowCSS("grey"),
            width: 120
            }} onClick={this._onSubmit}>
          <i className='fas fa-paper-plane' />
          <div className='formizo-h-m'>Submit</div>
        </StyledButton>
      </HStack>
    );
  }

  render(){
    let {doc} = this.props;
    let {Questions, Answers} = this.state;
    
    return (
      <VStack width="100%" height="100%">
        <HStack width="100%" height="100%">
          <VStack width="30%" height="100%">
            {this.renderInfo()}
          </VStack>
          <VStack style={{flexGrow: 1}} height="100%">
            <FlowizoWrap
              defaultData={Accessor.Get(doc, "flow")}
              onMounted={this.onMounted}
              onDataUpdated={this.onDataUpdated}
              controlsProps={{}}
              reactFlowProps={{}}
              addOns={{
                Questions, 
                Answers
              }}
              />
          </VStack>
        </HStack>
      </VStack>
    );

    /*

    return (
      <VStack width="100%" height="100%">
        <Paper position="static" style={{width: "100%"}}>
          <Tabs value={selectedTab} 
            indicatorColor="primary"
            textColor="primary"
            onChange={this.onChangeTab} 
            style={{backgroundColor: "aliceblue", color: "blue", minHeight: 20}}
            variant="scrollable"
            scrollButtons="auto"
            >
            {this.renderTabButtons()}
          </Tabs>
        </Paper>
        <Paper style={{width: "100%", height: "100%", background: "transparent", padding: "5px"}}>
          {this.renderTabPanels()}
        </Paper> 
      </VStack>
    );

    */
  }

}

export default FlowEditor;
