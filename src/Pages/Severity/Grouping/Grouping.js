import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from '../Grouping/schema';
import datalink from '../Grouping/datalink';

import Datumizo from '@IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from '@IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from '@IZOArc/STATIC';

class Grouping extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Location Severity",
      serverSidePagination: false, 
      base: {
        title: "Location Severity",
        exportDoc: "location_severity",
        schema: schema,
        reqAuth: "Severity.Grouping",

        columnsToolbar: false,
        filterToolbar: true,
        densityToolbar: true,
        exportToolbar: false,
        density: "compact",
        defaultPageSize: 50,
        showSelector: true,

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        Add: {
          title: "Add Location Severity",
          url: datalink.Request.Add,
          success: "Location Severity Added Successfully",
          fail: "Location Severity Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this Location Severity?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "Location Severity Deleted Successfully.",
          fail: "Location Severity Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit Location Severity ",
          url: datalink.Request.Edit,
          success: "Location Severity Edited Successfully",
          fail: "Location Severity Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "Location Severity ",
          url: datalink.Request.Info,
          success: "Location Severity Load Successfully",
          fail: "Location Severity Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },
        Import: {
          title: "Location Severity Import",
          content: "",
          url: datalink.Request.Import,
          success: "Location Severity Imported Successfully.",
          fail: "Location Severity Import Failed: ",
          schema: schema.ImportFormat,
          replace: true
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " Location Severity?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "Location Severity Deleted Successfully.",
          fail: "Location Severity Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Location Severity", reqFunc: "Add" }],
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
    Authority.Require("Severity.Location");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Grouping.defaultProps))){
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
            color: ColorX.GetColorCSS("elainOrange")
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

export default Grouping;
