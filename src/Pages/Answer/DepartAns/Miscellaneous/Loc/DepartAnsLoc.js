import React, { Component } from 'react';
import PropsType from 'prop-types';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';
import { Denied } from 'IZOArc/Fallback';

/**
 * @augments {Component<Props, State>}
 */
class DepartAnsLoc extends Component {

  static propTypes = {
    addOns: PropsType.object
  }

  static defaultProps = {
    addOns: {}
  }

  constructor(){
    super();
    this.state = {
      title: "Departure Answer Destinations",
      serverSidePagination: false, 
      base: {
        title: "Departure Answer Destination",
        exportDoc: "depart_ans_loc",
        schema: schema,
        reqAuth: "Answer.DepartAns.Miscellaneous.Loc",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact", //compact, standard, comfortable
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

        operations: {
          Add: {
            title: "Add Departure Answer Destination",
            url: datalink.Request.Add,
            success: "Departure Answer Destination Added Successfully",
            fail: "Departure Answer Destination Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this Departure Answer Destination?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Departure Answer Destination Deleted Successfully.",
            fail: "Departure Answer Destination Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Departure Answer Destination ",
            url: datalink.Request.Edit,
            success: "Departure Answer Destination Edited Successfully",
            fail: "Departure Answer Destination Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Departure Answer Destinations ",
            url: datalink.Request.Info,
            success: "Departure Answer Destinations Load Successfully",
            fail: "Departure Answer Destinations Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "Departure Answer Destination Import",
            content: "",
            url: datalink.Request.Import,
            success: "Departure Answer Destination Imported Successfully.",
            fail: "Departure Answer Destination Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Departure Answer Destination?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Departure Answer Destination Deleted Successfully.",
            fail: "Departure Answer Destination Delete Failed: ",
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "duplicate", func: "DuplicateAdd", caption: "Duplicate", reqFunc: "Duplicate" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Departure Answer Destination", reqFunc: "Add" }],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(DepartAnsLoc.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount(){
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
    let {addOns} = this.props;
    let {base, serverSidePagination, title} = this.state;
    if(!Authority.IsAccessibleQ("Answer.DepartAns.Miscellaneous.Loc")) return <Denied/>;
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

export default DepartAnsLoc;
