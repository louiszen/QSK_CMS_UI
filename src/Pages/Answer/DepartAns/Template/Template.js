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
class Template extends Component {

  static propTypes = {
    addOns: PropsType.object
  }

  static defaultProps = {
    addOns: {}
  }

  constructor(){
    super();
    this.state = {
      title: "Departure Answer Template",
      serverSidePagination: false, 
      base: {
        title: "Departure Answer Template",
        exportDoc: "depart_ans_temp",
        schema: schema,
        reqAuth: "Answer.DepartAns.Template",

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
            title: "Add Departure Answer Template",
            url: datalink.Request.Add,
            success: "Departure Answer Template Added Successfully",
            fail: "Departure Answer Template Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add",
            defaultDoc: {
              refID: "DepartAns"
            }
          },
          Delete: {
            title: "Delete this Departure Answer Template?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Departure Answer Template Deleted Successfully.",
            fail: "Departure Answer Template Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Departure Answer Template ",
            url: datalink.Request.Edit,
            success: "Departure Answer Template Edited Successfully",
            fail: "Departure Answer Template Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Departure Answer Template ",
            url: datalink.Request.Info,
            success: "Departure Answer Template Load Successfully",
            fail: "Departure Answer Template Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "Departure Answer Template Import",
            content: "",
            url: datalink.Request.Import,
            success: "Departure Answer Template Imported Successfully.",
            fail: "Departure Answer Template Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Departure Answer Template?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Departure Answer Template Deleted Successfully.",
            fail: "Departure Answer Template Delete Failed: ",
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
          left: [{ icon: "add", func: "Add", caption: "Add Departure Answer Template", reqFunc: "Add" }],
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
      this.getLinks();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Template.defaultProps))){
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

  getLinks = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/DepartAnsLink/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/DepartAnsLink/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        docs = _.filter(docs, o => _.isEmpty(o.effective.End));
        this.setState((state, props) => ({
          addOns: {
            ...state.addOns,
            Links: docs
          }
        }));
      } else {
        store.Alert("Cannot get useful link list", "error");
      }
    } catch (e) {
      store.Alert("Cannot get useful link list", "error");
    }
  }

  render(){
    let {base, serverSidePagination, title, addOns} = this.state;
    if(!Authority.IsAccessibleQ("Answer.DepartAns.Template")) return <Denied/>;
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

export default Template;
