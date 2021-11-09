import React, { Component } from 'react';
import PropsType from 'prop-types';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, store } from 'IZOArc/STATIC';
import { DOMAIN, IZOTheme } from '__Base/config';
import axios from 'axios';
import _ from 'lodash';
import { Denied } from 'IZOArc/Fallback';

/**
 * @augments {Component<Props, State>}
 */
class DefaultQ extends Component {

  static propTypes = {
    addOns: PropsType.object
  }

  static defaultProps = {
    addOns: {}
  }

  constructor(){
    super();
    this.state = {
      title: "Default Questions",
      serverSidePagination: false, 
      base: {
        title: "Default Question",
        exportDoc: "defaultq",
        schema: schema,
        reqAuth: "Questionnaire.DefaultQ",

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
            title: "Add Default Question",
            url: datalink.Request.Add,
            success: "Default Question Added Successfully",
            fail: "Default Question Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this Default Question?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Default Question Deleted Successfully.",
            fail: "Default Question Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Default Question ",
            url: datalink.Request.Edit,
            success: "Default Question Edited Successfully",
            fail: "Default Question Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Default Questions ",
            url: datalink.Request.Info,
            success: "Default Questions Load Successfully",
            fail: "Default Questions Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Import: {
            title: "Default Question Import",
            content: "",
            url: datalink.Request.Import,
            success: "Default Question Imported Successfully.",
            fail: "Default Question Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Default Question?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Default Question Deleted Successfully.",
            fail: "Default Question Delete Failed: ",
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "duplicate", func: "DuplicateAdd", caption: "Duplicate", reqFunc: "Duplicate" },
            //{ icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Default Question", reqFunc: "Add" }],
          right: [
            //{ icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    this._setAllStates(() => {
      this._getDefaultQ()
    });
  }

  componentDidUpdate(prevProps, prevState){
  if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(DefaultQ.defaultProps))){
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

  _getDefaultQ = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/DefaultQ/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/DefaultQ/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        docs = _.uniqBy(docs, (o, i) => o.refID);
        this.setState({
          defaultQs: docs
        })
      } else {
        store.Alert("Cannot get DefaultQ.", "error");
      }
    } catch (e) {
      store.Alert("Cannot get DefaultQ.", "error");
    }
  }

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
  }

  render(){
    let {addOns} = this.props;
    let {base, serverSidePagination, title, defaultQs} = this.state;
    if(!Authority.IsAccessibleQ("Questionnaire.DefaultQ")) return <Denied/>;
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
        <Datumizo
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo} addOns={{...addOns, defaultQs}}
          />
      </VStack>
    );
  }

}

export default DefaultQ;
