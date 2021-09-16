import React, { Component } from 'react';

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

  }

  static defaultProps = {
    
  }

  constructor(){
    super();
    this.state = {
      title: "Transition Answer Templates",
      serverSidePagination: false, 
      base: {
        title: "Transition Answer Template",
        exportDoc: "tra_answer_temp",
        schema: schema,
        reqAuth: "Answer.TransitAns.Template",

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
            title: "Add Transition Answer Template",
            url: datalink.Request.Add,
            success: "Transition Answer Template Added Successfully",
            fail: "Transition Answer Template Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this Transition Answer Template?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Transition Answer Template Deleted Successfully.",
            fail: "Transition Answer Template Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Transition Answer Template ",
            url: datalink.Request.Edit,
            success: "Transition Answer Template Edited Successfully",
            fail: "Transition Answer Template Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Transition Answer Templates ",
            url: datalink.Request.Info,
            success: "Transition Answer Templates Load Successfully",
            fail: "Transition Answer Templates Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "Transition Answer Template Import",
            content: "",
            url: datalink.Request.Import,
            success: "Transition Answer Template Imported Successfully.",
            fail: "Transition Answer Template Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Transition Answer Template?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Transition Answer Template Deleted Successfully.",
            fail: "Transition Answer Template Delete Failed: ",
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Transition Answer Template", reqFunc: "Add" }],
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
      this.getComp();
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

  getComp = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/TransitAnsComp/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/TransitAnsComp/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        docs = _.filter(docs, o => _.isEmpty(o.effective.End));
        this.setState((state, props) => ({
          addOns: {
            ...state.addOns,
            Components: docs
          }
        }));
      } else {
        store.Alert("Cannot get TransitAnsComp list", "error");
      }
    } catch (e) {
      store.Alert("Cannot get TransitAnsComp list", "error");
    }
  }

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
  }

  render(){
    let {base, serverSidePagination, title, addOns} = this.state;
    if(!Authority.IsAccessibleQ("Answer.TransitAns.Template")) return <Denied/>;
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