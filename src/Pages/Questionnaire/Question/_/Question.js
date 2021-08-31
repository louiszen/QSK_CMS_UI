import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { HStack, Spacer, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import _ from 'lodash';
import { Launch } from '@material-ui/icons';
import { IZOTheme } from '__Base/config';

class Question extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Questions",
      serverSidePagination: false, 
      base: {
        title: "Question",
        exportDoc: "question",
        schema: schema,
        reqAuth: "Questionnaire.Question",

        noDefaultButtons: false,
        noDefaultTable: true,

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

        Add: {
          title: "Add Question",
          url: datalink.Request.Add,
          success: "Question Added Successfully",
          fail: "Question Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this Question?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Question Deleted Successfully.",
          fail: "Question Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Question ",
          url: datalink.Request.Edit,
          success: "Question Edited Successfully",
          fail: "Question Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "Questions ",
          url: datalink.Request.Info,
          success: "Questions Load Successfully",
          fail: "Questions Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },
        Import: {
          title: "Question Import",
          content: "",
          url: datalink.Request.Import,
          success: "Question Imported Successfully.",
          fail: "Question Import Failed: ",
          schema: schema.ImportFormat
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Question?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Question Deleted Successfully.",
          fail: "Question Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Question", reqFunc: "Add" }],
          right: [
            //{ icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            { icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            { icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
            { icon: <Launch/>, func: this.GenerateScenario, caption: "Generate Scenarios", reqFunc: "Generate", theme: "caution"}
          ],
        },
      }
    };
  }

  GenerateScenario = {
    onClick: () => {
      console.log("HELLO");
    }
  }

  componentDidMount(){
    Authority.Require("Questionnaire.Question");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Question.defaultProps))){
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

  _onDataChange = (data) => {
    this.setState({
      data: data
    });
  }

  _toEdit = (id, doc) => {
    if(this.MountDatumizo){
      this.MountDatumizo.Edit(id, doc);
    }
  }

  _toInfo = (id, doc) => {
    if(this.MountDatumizo){
      this.MountDatumizo.Info(id, doc);
    }
  }

  _toDelete = (id, doc) => {
    if(this.MountDatumizo){
      this.MountDatumizo.Delete(id, doc);
    }
  }
  
  onWheel = (e) => {
    let container = document.getElementById("hccontainer");
    let containerScrollPosition = container.scrollLeft;
    container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY,
        behaviour: 'smooth' //if you want smooth scrolling
    })
}

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
  }

  renderQuestionBlocks(){
    let {data} = this.state;
    return (
      <VStack id="hccontainer" flexGrow={1} width="100%" alignItems="flex-start" style={{overflow: "auto", paddingBottom: 10}} onWheel={this.onWheel}>
        <HStack width="fit-content" style={{padding: 5}} flexGrow={1}>
        {_.map(data, (o, i) => <QuestionBlock key={i} doc={o} toEdit={this._toEdit} toInfo={this._toInfo} toDelete={this._toDelete}/>)}
        </HStack>
      </VStack>
    );
  }

  render(){
    let {base, serverSidePagination, title} = this.state;
    return (
      <VStack alignItems="flex-start" paddingX={1}>
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
        <Datumizo
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo} onDataChange={this._onDataChange}
          />
        {this.renderQuestionBlocks()}
        <Spacer height={15}/>
      </VStack>
    );
  }

}

export default Question;
