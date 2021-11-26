import React, { Component } from 'react';
import PropsType from 'prop-types';
import { observer } from 'mobx-react';

import _ from 'lodash';
import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, STORE, LocaleX } from 'IZOArc/STATIC';
import { IZOTheme } from '__SYSDefault/Theme';
import { Denied } from 'IZOArc/Fallback';
import PermitAPI from 'Mods/PermitAPI';
import { FindInPage } from '@mui/icons-material';
import ViewForm from './_gears/ViewForm';

/**
 * add ~react-datalink.js as datalink.js in the same scope
 * add ~react-schema.js as schema.js in the same scope
 * @augments {Component<Props, State>}
 */
class Submission extends Component {

  static propTypes = {
    addOns: PropsType.object,
    onDataChange: PropsType.func
  }

  static defaultProps = {
    addOns: {},
    onDataChange: undefined
  }

  constructor(){
    super();
    this.state = {
      title: () => LocaleX.Get("Submission.PageTitle"),
      serverSidePagination: false, 
      base: {
        title: () => LocaleX.Get("Submission.Title"),
        exportDoc: "submission",
        schema: schema,
        reqAuth: "Submission",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact", //compact, standard, comfortable
          defaultPageSize: 50,
          showSelector: false,
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
            title: () => LocaleX.Get("Submission.Add.title"),
            url: datalink.Request.Add,
            success:  () => LocaleX.Get("Submission.Add.success"),
            fail:  () => LocaleX.Get("Submission.Add.fail"),
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: () => LocaleX.Get("Submission.Delete.title"),
            content: () => LocaleX.Get("Submission.Delete.content"),
            url: datalink.Request.Delete,
            success: () => LocaleX.Get("Submission.Delete.success"),
            fail: () => LocaleX.Get("Submission.Delete.fail"),
            onSubmit: "Delete"
          },
          Edit: {
            title: () => LocaleX.Get("Submission.Edit.title"),
            url: datalink.Request.Edit,
            success: () => LocaleX.Get("Submission.Edit.success"),
            fail: () => LocaleX.Get("Submission.Edit.fail"),
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: () => LocaleX.Get("Submission.Info.title"),
            url: datalink.Request.Info,
            success: () => LocaleX.Get("Submission.Info.success"),
            fail: () => LocaleX.Get("Submission.Info.fail"),
            schema: schema.Info,
            readOnly: true,
            Custom: this.toViewForm
          },
          Duplicate: { //direct duplicate, for to Add, plz use func: "DuplicateAdd"
            title: () => LocaleX.Get("Submission.Duplicate.title"),
            url: datalink.Request.Duplicate,
            success: () => LocaleX.Get("Submission.Duplicate.success"),
            fail: () => LocaleX.Get("Submission.Duplicate.fail"),
            onSubmit: "Duplicate"
          },
          Import: {
            title: () => LocaleX.Get("Submission.Import.title"),
            content: "",
            url: datalink.Request.Import,
            success: () => LocaleX.Get("Submission.Import.success"),
            fail: () => LocaleX.Get("Submission.Import.fail"),
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => LocaleX.Get("Submission.DeleteBulk.title", {n: n}),
            content: () => LocaleX.Get("Submission.DeleteBulk.content"),
            url: datalink.Request.DeleteBulk,
            success: () => LocaleX.Get("Submission.DeleteBulk.success"),
            fail: () => LocaleX.Get("Submission.DeleteBulk.fail"),
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            //{ icon: "edit", func: "Edit", caption: () => LocaleX.Get("Submission.ButtonCaption.Edit"), reqFunc: "Edit" },
            { icon: <FindInPage/>, func: "Info", caption: () => LocaleX.Get("Submission.ButtonCaption.Info") },
            //{ icon: "delete", func: "Delete", caption: () => LocaleX.Get("Submission.ButtonCaption.Delete"), reqFunc: "Delete" },
            //{ icon: "duplicate", func: "Duplicate", caption: () => LocaleX.Get("Submission.ButtonCaption.Duplicate"), reqFunc: "Duplicate" },
            //{ icon: "duplicate", func: "DuplicateAdd", caption: () => LocaleX.Get("Submission.ButtonCaption.Duplicate"), reqFunc: "Duplicate" },
          ],
          left: [
            //{ icon: "add", func: "Add", caption: () => LocaleX.Get("Submission.ButtonCaption.Add"), reqFunc: "Add" }
          ],
          right: [
            //{ icon: "deletebulk", func: "DeleteBulk", caption: (n) => LocaleX.Get("Submission.ButtonCaption.DeleteBulk", {n: n}), reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => LocaleX.Get("Submission.ButtonCaption.Export", {n: n === 0? LocaleX.Get("__IZO.Datumizo.All") : n}), reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: () => LocaleX.Get("Submission.ButtonCaption.Import"), reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    this._setAllStates(() => {
      this.GetPermitTypes();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Submission.defaultProps))){
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

  toViewForm = (docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns) => {
    return (
      <ViewForm
        docID={docID}
        doc={doc}
        onQuit={onQuit}
        onQuitRefresh={onQuitRefresh}
        renderFormizo={renderFormizo}
        addOns={addOns}
        />
    );
  }

  GetPermitTypes = async () => {
    let allPermits = await PermitAPI.ListTypes();
    this.setState({
      allPermits: allPermits
    });
  }

  render(){
    let {addOns, onDataChange} = this.props;
    let {base, serverSidePagination, title, allPermits} = this.state;
    if(!Authority.IsAccessibleQ("Submission")) return <Denied/>;
    
    let pageTitle = title;
    if(_.isFunction(title)){
      pageTitle = title();
    }

    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS(IZOTheme.foreground)
            }}>
            {pageTitle}
          </Typography>
        </Box>
        <Datumizo lang={STORE.lang}
          base={base}
          addOns={{
            ...addOns,
            allPermits: allPermits
          }}
          serverSidePagination={serverSidePagination} 
          onMounted={this.onMountDatumizo} 
          onDataChange={onDataChange}
          />
      </VStack>
    );
  }

}

export default observer(Submission);
