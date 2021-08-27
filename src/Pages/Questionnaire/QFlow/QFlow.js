import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';
import FlowEditor from './FlowEditor/FlowEditor';

/**
 * @augments {Component<Props, State>}
 */
class QFlow extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Question Flows",
      serverSidePagination: false, 
      base: {
        title: "Question Flow",
        exportDoc: "qflow",
        schema: schema,
        reqAuth: "Questionnaire.QFlow",

        columnsToolbar: true,
        filterToolbar: true,
        densityToolbar: true,
        exportToolbar: false,
        density: "compact",
        defaultPageSize: 25,
        showSelector: true,
        noDefaultTable: false,
        noDefaultButtons: false,

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        Add: {
          title: "Add Question Flow",
          url: datalink.Request.Add,
          success: "Question Flow Added Successfully",
          fail: "Question Flow Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add",
          Custom: this.renderFlowEditor
        },
        Delete: {
          title: "Delete this Question Flow?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Question Flow Deleted Successfully.",
          fail: "Question Flow Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Question Flow ",
          url: datalink.Request.Edit,
          success: "Question Flow Edited Successfully",
          fail: "Question Flow Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit",
          Custom: this.renderFlowEditor
        },
        Info: {
          title: "Question Flows ",
          url: datalink.Request.Info,
          success: "Question Flows Load Successfully",
          fail: "Question Flows Load Failed: ",
          schema: schema.Info,
          readOnly: true,
          Custom: this.renderFlowEditor
        },
        Import: {
          title: "Question Flow Import",
          content: "",
          url: datalink.Request.Import,
          success: "Question Flow Imported Successfully.",
          fail: "Question Flow Import Failed: ",
          schema: schema.ImportFormat,
          replace: false
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Question Flow?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Question Flow Deleted Successfully.",
          fail: "Question Flow Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Question Flow", reqFunc: "Add" }],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      },
      addOns: {}
    };
  }

  renderFlowEditor = (docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns) => {
    return (
      <FlowEditor docID={docID} doc={doc} onQuit={onQuit} onQuitRefresh={onQuitRefresh}/>
    );
  }

  componentDidMount(){
    Authority.Require("Questionnaire.QFlow");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QFlow.defaultProps))){
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

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
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
        <Datumizo
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo} addOns={addOns}
          />
      </VStack>
    );
  }

}

export default QFlow;
