import React, { Component } from 'react';

import _ from 'lodash';
import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core';

import tabs from './tabs';

import { Accessor, Authority, store } from 'IZOArc/STATIC';
import { VStack, HStack, Spacer } from 'IZOArc/LabIZO/Stackizo';
import { DOMAIN } from '__Base/config';
import axios from 'axios';
import { Denied } from 'IZOArc/Fallback';

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
class Components extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      selectedTab: 0,
      addOns: {
        ansFormat: ["Simple Text", "Highlighted Number", "Highlighted Ordered Number"]
      }
    };
  }

  componentDidMount(){
    this._setAllStates(() => {
      this.getIconList();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Components.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
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
        let docs = payload;
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

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), callback);
  }

  onChangeTab = (e, tab) => {
    this.setState({
      selectedTab: tab
    });
  }

  renderTabPanels(){
    let {selectedTab, addOns} = this.state;

    return _.map(tabs, (o, i) => {
      return (
        <Box key={i} hidden={selectedTab !== i} style={{width: "100%", height: "100%"}}>
          {_.isFunction(o.render)? o.render(addOns) : o.render}
        </Box>
      );
    });
  }

  renderTabButtons(){
    return _.map(tabs, (o, i) => {
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

  render(){
    let {selectedTab} = this.state;
    if(!Authority.IsAccessibleQ("Answer.ArrivalAns.Components")) return <Denied/>;
    return (
      <VStack width="100%">
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
  }

}

export default Components;
