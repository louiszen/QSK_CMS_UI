import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';

/**
 * @augments {Component<Props, State>}
 */
class QOrder extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Question Ordering",
      serverSidePagination: false, 
      base: {
        title: "Question Ordering",
        exportDoc: "qorder",
        schema: schema,
        reqAuth: "Questionnaire.QOrder",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact",
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
          title: "Add Question Ordering",
          url: datalink.Request.Add,
          success: "Question Ordering Added Successfully",
          fail: "Question Ordering Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add",
          Custom: this.renderInner
        },
        Delete: {
          title: "Delete this Question Ordering?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Question Ordering Deleted Successfully.",
          fail: "Question Ordering Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Question Ordering ",
          url: datalink.Request.Edit,
          success: "Question Ordering Edited Successfully",
          fail: "Question Ordering Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit",
          Custom: this.renderInner
        },
        Info: {
          title: "Question Ordering ",
          url: datalink.Request.Info,
          success: "Question Ordering Load Successfully",
          fail: "Question Ordering Load Failed: ",
          schema: schema.Info,
          readOnly: true,
          Custom: this.renderInner
        },
        Import: {
          title: "Question Ordering Import",
          content: "",
          url: datalink.Request.Import,
          success: "Question Ordering Imported Successfully.",
          fail: "Question Ordering Import Failed: ",
          schema: schema.ImportFormat,
          replace: true
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Question Ordering?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Question Ordering Deleted Successfully.",
          fail: "Question Ordering Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Question Ordering", reqFunc: "Add" }],
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

  componentDidMount(){
    Authority.Require("Questionnaire.QOrder");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QOrder.defaultProps))){
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

  renderInner(docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns){
    return (
      <HStack alignItems="flex-start">
        {renderFormizo()}
        <Box width="30%">
          <img src="/Images/Placeholder/Capture2.PNG" alt=""/>
        </Box>
      </HStack>
    );
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

export default QOrder;
