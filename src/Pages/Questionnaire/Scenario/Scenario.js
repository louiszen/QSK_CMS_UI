import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, store } from 'IZOArc/STATIC';
import { IZOTheme, DOMAIN } from '__Base/config';
import axios from 'axios';
import _ from 'lodash';

const otherData = {
  Question: "/Tables/Question/List",
  QUAReq: "/Tables/QUAReq/List",
  BNEReq: "/Tables/BNEReq/List",
  APProc: "/Tables/APProc/List",
};

/**
 * @augments {Component<Props, State>}
 */
class Scenario extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Scenarios",
      serverSidePagination: false, 
      base: {
        title: "scenario",
        exportDoc: "scenario",
        schema: schema,
        reqAuth: "Questionnaire.Scenario",
        
        noDefaultTable: true,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "standard",
          defaultPageSize: 25,
          showSelector: true,
        },

        formizo: {

        },

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        operations:{
          Add: {
            title: "Add scenario",
            url: datalink.Request.Add,
            success: "scenario Added Successfully",
            fail: "scenario Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this scenario?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "scenario Deleted Successfully.",
            fail: "scenario Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit scenario ",
            url: datalink.Request.Edit,
            success: "scenario Edited Successfully",
            fail: "scenario Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Scenarios ",
            url: datalink.Request.Info,
            success: "Scenarios Load Successfully",
            fail: "Scenarios Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "scenario Import",
            content: "",
            url: datalink.Request.Import,
            success: "scenario Imported Successfully.",
            fail: "scenario Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " scenario?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "scenario Deleted Successfully.",
            fail: "scenario Delete Failed: ",
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [
            //{ icon: "add", func: "Add", caption: "Add scenario", reqFunc: "Add" }
          ],
          right: [
            //{ icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      },
      addOns: {}
    };
  }

  componentDidMount(){
    Authority.Require("Questionnaire.Scenario");
    this._setAllStates(async () => {
      await Promise.all(_.map(otherData, async (o, i) => {
        await this._GetOtherData(o, i);
      }));
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Scenario.defaultProps))){
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

  _GetOtherData = async (o, i) => {
    let { addOns } = this.props;
    let url = DOMAIN + o;
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log(o, res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        this.setState({
          [i]: payload.docs
        })
      } else {
        store.Alert(payload, "error");
      }
    } catch (e) {
      store.Alert("Cannot connect to Server", "error");
    }
  }

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
  }

  _onDataChange = (data) => {
    this.setState({
      data: data
    })
  }

  renderDesInner(o, content, i, bgColor){
    if(o.type && o.type === "verdict") bgColor = ColorX.GetBGColorCSS("purple");
    return (
      <HStack padding={2} style={{background: bgColor, height: 70}} key={i} justifyContent="flex-start">
        <Typography style={{fontSize: 9}}>
          {content}
        </Typography>
      </HStack>
    ); 
  }

  renderAllDes(docs, bgColor){
    return _.map(docs, (o, i) => {
      return this.renderDesInner(o, o.description, i, bgColor);
    })
  }

  renderDes(docs, title, bgColor){
    return (
      <VStack width="100%" spacing={1}>
        <HStack padding={2} style={{background: bgColor, height: 20}}>
          <Typography style={{fontSize: 14, fontWeight: "bold"}}>
            {title}
          </Typography>
        </HStack>
        <VStack spacing={1} width="100%">
        {this.renderAllDes(docs, bgColor)}
        </VStack>
      </VStack>
    );
  }

  renderColHead(){
    let {Question, QUAReq, BNEReq, APProc} = this.state;
    return (
      <VStack width={250}>
        <HStack padding={2} style={{background: ColorX.GetBGColorCSS("yellow"), height: 25}}>
          <Typography style={{fontSize: 18, fontWeight: "bold"}}>
            {"Scenario"}
          </Typography>
        </HStack>
        {this.renderDes(Question, "Conditions", ColorX.GetBGColorCSS("green"))}
        {this.renderDes(QUAReq, "Quaratine Requirements", ColorX.GetBGColorCSS("orange"))}
        {this.renderDes(BNEReq, "Board & Entry Requirements", ColorX.GetBGColorCSS("red"))}
        {this.renderDes(APProc, "Airport Proc", ColorX.GetBGColorCSS("blue"))}
      </VStack>
    );
  }

  renderValInner(o, content, i, bgColor){
    if(o.type && o.type === "verdict") bgColor = ColorX.GetBGColorCSS("purple");
    if(_.isBoolean(content)) content = content? "TRUE" : "FALSE";
    return (
      <HStack padding={2} style={{background: bgColor, height: 70}} key={i} justifyContent="flex-start">
        <Typography style={{fontSize: 9}}>
          {content}
        </Typography>
      </HStack>
    ); 
  }

  renderAllVal(docs, data, bgColor){
    return _.map(docs, (o, i) => {
      console.log(data, o);
      let f = data.find(v => v.ref === o.refID);
      console.log(f)
      return this.renderValInner(o, f? f.$eq : "", i, bgColor);
    })
  }

  renderVal(ref, data, bgColor){
    return (
      <VStack width="100%" spacing={1}>
        <HStack padding={2} style={{background: bgColor, height: 20}}>
          <Typography style={{fontSize: 14, fontWeight: "bold"}}>
            {""}
          </Typography>
        </HStack>
        <VStack spacing={1} width="100%">
        {this.renderAllVal(ref, data, bgColor)}
        </VStack>
      </VStack>
    );
  }

  renderDoc(o, i){
    let {Question, QUAReq, BNEReq, APProc} = this.state;
    return (
      <VStack width={200}>
        <HStack padding={2} style={{background: ColorX.GetBGColorCSS("yellow"), height: 25}}>
          <Typography style={{fontSize: 18, fontWeight: "bold"}}>
            {o.refID}
          </Typography>
        </HStack>
        {this.renderVal(Question, Accessor.Get(o, "condition"), ColorX.GetBGColorCSS("green"))}
        {this.renderVal(QUAReq, Accessor.Get(o, "QUAReq"), ColorX.GetBGColorCSS("orange"))}
        {this.renderVal(BNEReq, Accessor.Get(o, "BNEReq"), ColorX.GetBGColorCSS("red"))}
        {this.renderVal(APProc, Accessor.Get(o, "APProc"), ColorX.GetBGColorCSS("blue"))}
      </VStack>
    );
  }

  renderScenarios(){
    let {data} = this.state;
    return _.map(data, (o, i) => {
      return this.renderDoc(o, i);
    });
  }

  renderScenarioTable(){
    return (
      <HStack width="100%" justifyContent="flex-start" spacing={2}>
        {this.renderColHead()}
        <HStack justifyContent="flex-start" spacing={2}>
          {this.renderScenarios()}
        </HStack>
      </HStack>
    );
  }

  render(){
    let {base, serverSidePagination, title, addOns} = this.state;
    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS(IZOTheme.foreground)
            }}>
            {title}
          </Typography>
        </Box>
        {this.renderScenarioTable()}
        <Datumizo
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo} addOns={addOns} onDataChange={this._onDataChange}
          />
      </VStack>
    );
  }

}

export default Scenario;
