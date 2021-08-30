import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';

class QUAReq extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Quarantine Requirements",
      serverSidePagination: false, 
      base: {
        title: "Quarantine Req",
        exportDoc: "qua_req",
        schema: schema,
        reqAuth: "Answer.ArrivalAns.QUAReq",

        columnsToolbar: true,
        filterToolbar: true,
        densityToolbar: true,
        exportToolbar: false,
        density: "compact",
        defaultPageSize: 50,
        showSelector: true,
        noDefaultTable: false,

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        Add: {
          title: "Add Quarantine Req",
          url: datalink.Request.Add,
          success: "Quarantine Req Added Successfully",
          fail: "Quarantine Req Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add",
          Custom: this.renderInner
        },
        Delete: {
          title: "Delete this Quarantine Req?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Quarantine Req Deleted Successfully.",
          fail: "Quarantine Req Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Quarantine Req ",
          url: datalink.Request.Edit,
          success: "Quarantine Req Edited Successfully",
          fail: "Quarantine Req Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit",
          Custom: this.renderInner
        },
        Info: {
          title: "Quarantine Requirements ",
          url: datalink.Request.Info,
          success: "Quarantine Requirements Load Successfully",
          fail: "Quarantine Requirements Load Failed: ",
          schema: schema.Info,
          readOnly: true,
          Custom: this.renderInner
        },
        Import: {
          title: "Quarantine Req Import",
          content: "",
          url: datalink.Request.Import,
          success: "Quarantine Req Imported Successfully.",
          fail: "Quarantine Req Import Failed: ",
          schema: schema.ImportFormat,
          replace: true
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Quarantine Req?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Quarantine Req Deleted Successfully.",
          fail: "Quarantine Req Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Quarantine Req", reqFunc: "Add" }],
          right: [
            { icon: "", func: null, caption: "Quarantine", theme: {color: "blue"} },
            { icon: "", func: null, caption: "Documents", theme: {color: "blue"} },
            { icon: "", func: null, caption: "Entry", theme: {color: "blue"} },
            { icon: "", func: null, caption: "Airport Proc", theme: {color: "blue"} },
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            { icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            { icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      },
      addOns: {
        ansFormat: ["number", "select", "array"]
      }
    };
  }

  renderInner(docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns){
    return (
      <HStack alignItems="flex-start">
        {renderFormizo()}
        <Box width="30%">
          <img src="/Images/Placeholder/Capture1.PNG" alt=""/>
        </Box>
      </HStack>
    );
  }

  componentDidMount(){
    Authority.Require("Answer.ArrivalAns.QUAReq");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QUAReq.defaultProps))){
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
    console.log(addOns);
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

export default QUAReq;
  