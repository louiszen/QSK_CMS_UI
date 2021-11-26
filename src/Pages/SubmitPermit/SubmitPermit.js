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

/**
 * add ~react-datalink.js as datalink.js in the same scope
 * add ~react-schema.js as schema.js in the same scope
 * @augments {Component<Props, State>}
 */
class SubmitPermit extends Component {

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
      title: () => LocaleX.Get("SubmitPermit.PageTitle"),
      serverSidePagination: false, 
      base: {
        title: () => LocaleX.Get("SubmitPermit.Title"),
        exportDoc: "permits",
        schema: schema,
        reqAuth: "SubmitPermit",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: false,
          filterToolbar: true,
          densityToolbar: false,
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
            title: () => LocaleX.Get("SubmitPermit.Add.title"),
            url: datalink.Request.Add,
            success:  () => LocaleX.Get("SubmitPermit.Add.success"),
            fail:  () => LocaleX.Get("SubmitPermit.Add.fail"),
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: () => LocaleX.Get("SubmitPermit.Delete.title"),
            content: () => LocaleX.Get("SubmitPermit.Delete.content"),
            url: datalink.Request.Delete,
            success: () => LocaleX.Get("SubmitPermit.Delete.success"),
            fail: () => LocaleX.Get("SubmitPermit.Delete.fail"),
            onSubmit: "Delete"
          },
          Edit: {
            title: () => LocaleX.Get("SubmitPermit.Edit.title"),
            url: datalink.Request.Edit,
            success: () => LocaleX.Get("SubmitPermit.Edit.success"),
            fail: () => LocaleX.Get("SubmitPermit.Edit.fail"),
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: () => LocaleX.Get("SubmitPermit.Info.title"),
            url: datalink.Request.Info,
            success: () => LocaleX.Get("SubmitPermit.Info.success"),
            fail: () => LocaleX.Get("SubmitPermit.Info.fail"),
            schema: schema.Info,
            readOnly: true
          },
          Duplicate: { //direct duplicate, for to Add, plz use func: "DuplicateAdd"
            title: () => LocaleX.Get("SubmitPermit.Duplicate.title"),
            url: datalink.Request.Duplicate,
            success: () => LocaleX.Get("SubmitPermit.Duplicate.success"),
            fail: () => LocaleX.Get("SubmitPermit.Duplicate.fail"),
            onSubmit: "Duplicate"
          },
          Import: {
            title: () => LocaleX.Get("SubmitPermit.Import.title"),
            content: "",
            url: datalink.Request.Import,
            success: () => LocaleX.Get("SubmitPermit.Import.success"),
            fail: () => LocaleX.Get("SubmitPermit.Import.fail"),
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => LocaleX.Get("SubmitPermit.DeleteBulk.title", {n: n}),
            content: () => LocaleX.Get("SubmitPermit.DeleteBulk.content"),
            url: datalink.Request.DeleteBulk,
            success: () => LocaleX.Get("SubmitPermit.DeleteBulk.success"),
            fail: () => LocaleX.Get("SubmitPermit.DeleteBulk.fail"),
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            //{ icon: "edit", func: "Edit", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Edit"), reqFunc: "Edit" },
            //{ icon: "info", func: "Info", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Info") },
            //{ icon: "delete", func: "Delete", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Delete"), reqFunc: "Delete" },
            //{ icon: "duplicate", func: "Duplicate", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Duplicate"), reqFunc: "Duplicate" },
            //{ icon: "duplicate", func: "DuplicateAdd", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Duplicate"), reqFunc: "Duplicate" },
          ],
          left: [
            //{ icon: "add", func: "Add", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Add"), reqFunc: "Add" }
          ],
          right: [
            //{ icon: "deletebulk", func: "DeleteBulk", caption: (n) => LocaleX.Get("SubmitPermit.ButtonCaption.DeleteBulk", {n: n}), reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => LocaleX.Get("SubmitPermit.ButtonCaption.Export", {n: n === 0? LocaleX.Get("__IZO.Datumizo.All") : n}), reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: () => LocaleX.Get("SubmitPermit.ButtonCaption.Import"), reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(SubmitPermit.defaultProps))){
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
    let {addOns, onDataChange} = this.props;
    let {base, serverSidePagination, title} = this.state;
    if(!Authority.IsAccessibleQ("SubmitPermit")) return <Denied/>;
    
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
          addOns={addOns} 
          serverSidePagination={serverSidePagination} 
          onMounted={this.onMountDatumizo} 
          onDataChange={onDataChange}
          />
      </VStack>
    );
  }

}

export default observer(SubmitPermit);
