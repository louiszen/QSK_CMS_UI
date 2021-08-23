import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';

class BNEReq extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Boarding & Entry Requirements",
      serverSidePagination: false, 
      base: {
        title: "Boarding & Entry Req",
        exportDoc: "bne_req",
        schema: schema,
        reqAuth: "Answer.ArrivalAns.BNEReq",

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
          title: "Add Boarding & Entry Req",
          url: datalink.Request.Add,
          success: "Boarding & Entry Req Added Successfully",
          fail: "Boarding & Entry Req Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this Boarding & Entry Req?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Boarding & Entry Req Deleted Successfully.",
          fail: "Boarding & Entry Req Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Boarding & Entry Req ",
          url: datalink.Request.Edit,
          success: "Boarding & Entry Req Edited Successfully",
          fail: "Boarding & Entry Req Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "Boarding & Entry Requirements ",
          url: datalink.Request.Info,
          success: "Boarding & Entry Requirements Load Successfully",
          fail: "Boarding & Entry Requirements Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },
        Import: {
          title: "Boarding & Entry Req Import",
          content: "",
          url: datalink.Request.Import,
          success: "Boarding & Entry Req Imported Successfully.",
          fail: "Boarding & Entry Req Import Failed: ",
          schema: schema.ImportFormat,
          replace: true
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Boarding & Entry Req?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Boarding & Entry Req Deleted Successfully.",
          fail: "Boarding & Entry Req Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Boarding & Entry Req", reqFunc: "Add" }],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            { icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            { icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    Authority.Require("Answer.ArrivalAns.BNEReq");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(BNEReq.defaultProps))){
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
    let {base, serverSidePagination, title} = this.state;
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
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo}
          />
      </VStack>
    );
  }

}

export default BNEReq;
