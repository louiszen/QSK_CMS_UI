import React, { Component } from 'react';
import PropsType from 'prop-types';
import { observer } from 'mobx-react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, store } from 'IZOArc/STATIC';
import { IZOTheme } from '__SYSDefault/Theme';
import { Denied } from 'IZOArc/Fallback';

class APProc extends Component {

  static propTypes = {
    addOns: PropsType.object
  }

  static defaultProps = {
    addOns: {}
  }

  constructor(){
    super();
    this.state = {
      title: "Airport Procedures",
      serverSidePagination: false, 
      base: {
        title: "Airport Procedure",
        exportDoc: "airport_proc",
        schema: schema,
        reqAuth: "Answer.ArrivalAns.Components.APProc",

        noDefaultTable: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact",
          defaultPageSize: 50,
          showSelector: true,
        },

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        operations: {
          Add: {
            title: "Add Airport Procedure",
            url: datalink.Request.Add,
            success: "Airport Procedure Added Successfully",
            fail: "Airport Procedure Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this Airport Procedure?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Airport Procedure Deleted Successfully.",
            fail: "Airport Procedure Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Airport Procedure ",
            url: datalink.Request.Edit,
            success: "Airport Procedure Edited Successfully",
            fail: "Airport Procedure Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Airport Procedures ",
            url: datalink.Request.Info,
            success: "Airport Procedures Load Successfully",
            fail: "Airport Procedures Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "Airport Procedure Import",
            content: "",
            url: datalink.Request.Import,
            success: "Airport Procedure Imported Successfully.",
            fail: "Airport Procedure Import Failed: ",
            schema: schema.ImportFormat,
            replace: true
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Airport Procedure?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Airport Proc Deleted Successfully.",
            fail: "Airport Proc Delete Failed: ",
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
          left: [{ icon: "add", func: "Add", caption: "Add Airport Procedure", reqFunc: "Add" }],
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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(APProc.defaultProps))){
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
    let {addOns} = this.props;
    let {base, serverSidePagination, title} = this.state;
    if(!Authority.IsAccessibleQ("Answer.ArrivalAns.Components.APProc")) return <Denied/>;
    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS(IZOTheme.menuFG)
            }}>
            {title}
          </Typography>
        </Box>
        <Datumizo lang={store.lang}
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo} addOns={addOns}
          />
      </VStack>
    );
  }

}

export default observer(APProc);
  