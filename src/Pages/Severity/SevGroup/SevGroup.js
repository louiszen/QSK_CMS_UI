import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';

class SevGroup extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Severity Groups",
      serverSidePagination: false, 
      base: {
        title: "Severity Group",
        exportDoc: "severity_groups",
        schema: schema,
        reqAuth: "Severity.SevGroup",

        columnsToolbar: false,
        filterToolbar: true,
        densityToolbar: true,
        exportToolbar: false,
        density: "compact",
        defaultPageSize: 25,
        showSelector: true,

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        Add: {
          title: "Add Severity Group",
          url: datalink.Request.Add,
          success: "Severity Group Added Successfully",
          fail: "Severity Group Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this Severity Group?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Severity Group Deleted Successfully.",
          fail: "Severity Group Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Severity Group ",
          url: datalink.Request.Edit,
          success: "Severity Group Edited Successfully",
          fail: "Severity Group Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "Severity Groups ",
          url: datalink.Request.Info,
          success: "Severity Groups Load Successfully",
          fail: "Severity Groups Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },
        Import: {
          title: "Severity Group Import",
          content: "",
          url: datalink.Request.Import,
          success: "Severity Group Imported Successfully.",
          fail: "Severity Group Import Failed: ",
          schema: schema.ImportFormat,
          replace: true
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Severity Group?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Severity Group Deleted Successfully.",
          fail: "Severity Group Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Severity Group", reqFunc: "Add" }],
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
    Authority.Require("Severity.SevGroup");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(SevGroup.defaultProps))){
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

export default SevGroup;
