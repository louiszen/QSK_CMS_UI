import React, { Component } from 'react';
import PropsType from 'prop-types';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, store } from 'IZOArc/STATIC';
import { DOMAIN, IZOTheme } from '__Base/config';
import _ from 'lodash';
import axios from 'axios';
import { Denied } from 'IZOArc/Fallback';

/**
 * @augments {Component<Props, State>}
 */
class CT extends Component {

  static propTypes = {
    addOns: PropsType.object
  }

  static defaultProps = {
    addOns: {}
  }

  constructor(){
    super();
    this.state = {
      title: "COVID-19 Test for Passengers at HKIA",
      serverSidePagination: false, 
      base: {
        title: "COVID-19 Test for Passengers at HKIA",
        exportDoc: "covidtest",
        schema: schema,
        reqAuth: "Answer.DepartAns.Components.CT",

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
            title: "Add COVID-19 Test for Passengers at HKIA",
            url: datalink.Request.Add,
            success: "COVID-19 Test for Passengers at HKIA Added Successfully",
            fail: "COVID-19 Test for Passengers at HKIA Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this COVID-19 Test for Passengers at HKIA?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "COVID-19 Test for Passengers at HKIA Deleted Successfully.",
            fail: "COVID-19 Test for Passengers at HKIA Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit COVID-19 Test for Passengers at HKIA ",
            url: datalink.Request.Edit,
            success: "COVID-19 Test for Passengers at HKIA Edited Successfully",
            fail: "COVID-19 Test for Passengers at HKIA Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "COVID-19 Test for Passengers at HKIA ",
            url: datalink.Request.Info,
            success: "COVID-19 Test for Passengers at HKIA Load Successfully",
            fail: "COVID-19 Test for Passengers at HKIA Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "COVID-19 Test for Passengers at HKIA Import",
            content: "",
            url: datalink.Request.Import,
            success: "COVID-19 Test for Passengers at HKIA Imported Successfully.",
            fail: "COVID-19 Test for Passengers at HKIA Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " COVID-19 Test for Passengers at HKIA?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "COVID-19 Test for Passengers at HKIA Deleted Successfully.",
            fail: "COVID-19 Test for Passengers at HKIA Delete Failed: ",
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
          left: [{ icon: "add", func: "Add", caption: "Add COVID-19 Test for Passengers at HKIA", reqFunc: "Add" }],
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
    this._setAllStates(() => {
      this.getVTests();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(CT.defaultProps))){
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

  getVTests = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/DepartAnsTest/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/DepartAnsTest/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        docs = _.filter(docs, o => _.isEmpty(o.effective.End));
        this.setState((state, props) => ({
          addOns: {
            ...state.addOns,
            VTests: docs
          }
        }));
      } else {
        store.Alert("Cannot get COVID-19 test list", "error");
      }
    } catch (e) {
      store.Alert("Cannot get COVID-19 test list", "error");
    }
  }

  render(){
    let {base, serverSidePagination, title, addOns} = this.state;
    if(!Authority.IsAccessibleQ("Answer.DepartAns.Components.CT")) return <Denied/>;
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

export default CT;
