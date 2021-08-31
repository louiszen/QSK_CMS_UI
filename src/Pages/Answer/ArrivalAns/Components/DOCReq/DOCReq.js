import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';

/**
 * @augments {Component<Props, State>}
 */
class DOCReq extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Document Requirements",
      serverSidePagination: false, 
      base: {
        title: "Document Requirement",
        exportDoc: "doc_req",
        schema: schema,
        reqAuth: "Answer.ArrivalAns.Components.DOCReq",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact",
          defaultPageSize: 50,
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
          title: "Add Document Requirement",
          url: datalink.Request.Add,
          success: "Document Requirement Added Successfully",
          fail: "Document Requirement Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this Document Requirement?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Document Requirement Deleted Successfully.",
          fail: "Document Requirement Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Document Requirement ",
          url: datalink.Request.Edit,
          success: "Document Requirement Edited Successfully",
          fail: "Document Requirement Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "Document Requirements ",
          url: datalink.Request.Info,
          success: "Document Requirements Load Successfully",
          fail: "Document Requirements Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },
        Import: {
          title: "Document Requirement Import",
          content: "",
          url: datalink.Request.Import,
          success: "Document Requirement Imported Successfully.",
          fail: "Document Requirement Import Failed: ",
          schema: schema.ImportFormat,
          replace: true
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Document Requirement?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Document Requirement Deleted Successfully.",
          fail: "Document Requirement Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Document Requirement", reqFunc: "Add" }],
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
    Authority.Require("Answer.ArrivalAns.Components.DOCReq");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(DOCReq.defaultProps))){
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

export default DOCReq;
