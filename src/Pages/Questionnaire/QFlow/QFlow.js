import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';
import axios from "axios";

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, store } from 'IZOArc/STATIC';
import { IZOTheme } from '__SYSDefault/Theme';
import { DOMAIN } from '__SYSDefault/Domain';
import FlowEditor from './FlowEditor/FlowEditor';
import { Denied } from 'IZOArc/Fallback';
import _ from 'lodash';
import { v1 } from 'uuid';

/**
 * @augments {Component<Props, State>}
 */
class QFlow extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Question Flows",
      serverSidePagination: false, 
      base: {
        title: "Question Flow",
        exportDoc: "qflow",
        schema: schema,
        reqAuth: "Questionnaire.QFlow",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact",
          defaultPageSize: 25,
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
            title: "Add Question Flow",
            url: datalink.Request.Add,
            success: "Question Flow Added Successfully",
            fail: "Question Flow Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: this.Add,
            Custom: this.renderFlowEditorAdd
          },
          Delete: {
            title: "Delete this Question Flow?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Question Flow Deleted Successfully.",
            fail: "Question Flow Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Question Flow ",
            url: datalink.Request.Edit,
            success: "Question Flow Edited Successfully",
            fail: "Question Flow Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: this.Edit,
            Custom: this.renderFlowEditor
          },
          Info: {
            title: "Question Flows ",
            url: datalink.Request.Info,
            success: "Question Flows Load Successfully",
            fail: "Question Flows Load Failed: ",
            schema: schema.Info,
            readOnly: true,
            Custom: this.renderFlowEditor
          },
          Import: {
            title: "Question Flow Import",
            content: "",
            url: datalink.Request.Import,
            success: "Question Flow Imported Successfully.",
            fail: "Question Flow Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Question Flow?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Question Flow Deleted Successfully.",
            fail: "Question Flow Delete Failed: ",
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
          left: [{ icon: "add", func: "Add", caption: "Add Question Flow", reqFunc: "Add" }],
          right: [
            //{ icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      },
      addOns: {}
    };
  }

  renderFlowEditor = (docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns, ibase, onSubmit, auth, level, formizo) => {
    return (
      <FlowEditor docID={docID} doc={doc} onQuit={onQuit} onQuitRefresh={onQuitRefresh} renderFormizo={renderFormizo} onSubmit={onSubmit} auth={auth} level={level} formizo={formizo} ibase={ibase} readOnly={ibase.readOnly}/>
    );
  }

  renderFlowEditorAdd = (docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns, ibase, onSubmit, auth, level, formizo) => {
    let {sevgroups} = this.state;
    if(_.isEmpty(doc)){
      doc.refID = "Flow";
      doc.flow = _.map(sevgroups, (o, i) => {
        return {
          id: v1(),
          type: "Tube_Src",
          data: {
            inner: "Severity " + o,
            severity: o
          },
          position: { x: i * 300, y: 100}
        };
      });
    }
    return (
      <FlowEditor docID={docID} doc={doc} onQuit={onQuit} onQuitRefresh={onQuitRefresh} renderFormizo={renderFormizo} onSubmit={onSubmit} auth={auth} level={level} formizo={formizo} ibase={ibase} readOnly={ibase.readOnly}/>
    );
  }

  componentDidMount(){
    this._setAllStates(() => {
      this.getSevGroup();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QFlow.defaultProps))){
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

  getSevGroup = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Tables/SevGroup/List";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Tables/SevGroup/List", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        let docs = payload.docs;
        let sevgroups = _.map(docs, o => o.severity);
        sevgroups = _.uniq(sevgroups);
        this.setState({
          sevgroups: sevgroups
        })
      } else {
        store.Alert("Cannot get Severity Groups", "error");
      }
    } catch (e) {
      store.Alert("Cannot get Severity Groups", "error");
    }
  }

  Add = {
    onClick: () => {
      let {base} = this.props;
      this.setState({
        inEdit: true,
        mode: "Add",
        doc: base.operations?.Add?.defaultDoc || {}
      });
    },

    onSubmit: async (formProps) => {
      console.log("submit Add");
      console.log(formProps);

      let { base, addOns } = this.state;
      let url = DOMAIN + base.operations?.Add?.url;
      let docID = this.MountDatumizo.GetDocID();

      _.map(formProps.flow, (o, i) => {
        if(o.data && o.data.addOns) delete o.data.addOns;
        if(o.data && o.data.callback) delete o.data.callback;
      });

      let payloadOut = {
        data: {
          ...formProps,
        },
        JWT: store.user.JWT,
        addOns: addOns,
      };

      if(base.operations?.Add?.withFile){
        payloadOut = this._getUploadFormData(payloadOut);
      }
      try {
        console.log(base.operations?.Add?.url, payloadOut);

        store.isLoading(true);
        let res = await axios.post(url, payloadOut);
        store.isLoading(false);

        console.log(base.operations?.Add?.url, res.data);

        let { Success, payload } = res.data;

        if (Success === true) {
          if (base.operations?.Add?.onSuccess) {
            base.operations?.Add?.onSuccess(payload);
          } else {
            this.Add.onSuccess(payload);
          }
          this.MountDatumizo.QuitInner(docID);
        } else {
          if (base.operations?.Add?.onFail) {
            base.operations?.Add?.onFail(payload);
          } else {
            this.Add.onFail(payload);
          }
        }
      } catch (e) {
        store.isLoading(false);
        if (base.operations?.Add?.onFail) {
          base.operations?.Add?.onFail(e);
        } else {
          this.Add.onFail(e);
        }
      }
    },

    onSuccess: (payload) => {
      let { base } = this.state;
      store.Alert(base.operations?.Add?.success, "success");
      this.MountDatumizo.Reload();
    },

    onFail: (payload) => {
      let { base } = this.state;
      let msg = base.operations?.Add?.fail + (payload.message || "");
      store.Alert(msg, "error");
    },
  };

  Edit = {
    onClick: (id, row) => {
      this.setState({
        inEdit: true,
        mode: "Edit",
        doc: row,
        docID: id,
      });
    },
    onSubmit: async (formProps) => {
      console.log("submit Edit");
      console.log(formProps);

      let { base, addOns } = this.state;
      let { doc } = this.state;

      let url = DOMAIN + base.operations?.Edit?.url;

      _.map(formProps.flow, (o, i) => {
        if(o.data && o.data.addOns) delete o.data.addOns;
        if(o.data && o.data.callback) delete o.data.callback;
      });

      let payloadOut = {
        data: {
          ...doc,
          ...formProps,
        },
        JWT: store.user.JWT,
        addOns: addOns,
      };

      if(base.operations?.Edit?.withFile){
        payloadOut = this._getUploadFormData(payloadOut);
      }

      try {
        console.log(base.operations?.Edit?.url, payloadOut);

        store.isLoading(true);
        let res = await axios.post(url, payloadOut);
        store.isLoading(false);

        console.log(base.operations?.Edit?.url, res.data);

        let { Success, payload } = res.data;

        if (Success === true) {
          if (base.operations?.Edit?.onSuccess) {
            base.operations?.Edit?.onSuccess(payload);
          } else {
            this.Edit.onSuccess(payload);
          }
          this.MountDatumizo.QuitInner();
        } else {
          if (base.operations?.Edit?.onSuccess) {
            base.operations?.Edit?.onFail(payload);
          } else {
            this.Edit.onFail(payload);
          }
        }
      } catch (e) {
        store.isLoading(false);
        if (base.operations?.Edit?.onFail) {
          base.operations?.Edit?.onFail(e);
        } else {
          this.Edit.onFail(e);
        }
      }
    },

    onSuccess: (payload) => {
      let { base } = this.state;
      store.Alert(base.operations?.Edit?.success, "success");
      this.MountDatumizo.Reload();
    },

    onFail: (payload) => {
      let { base } = this.state;
      let msg = base.operations?.Edit?.fail + (payload.message || "");
      store.Alert(msg, "error");
    },
  };

  render(){
    let {base, serverSidePagination, title, addOns} = this.state;
    if(!Authority.IsAccessibleQ("Questionnaire.QFlow")) return <Denied/>;
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

export default observer(QFlow);
