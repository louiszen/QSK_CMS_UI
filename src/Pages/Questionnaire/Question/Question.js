import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from 'IZOArc/STATIC';
import { IZOTheme } from '__Base/config';
import { Denied } from 'IZOArc/Fallback';

/**
 * @augments {Component<Props, State>}
 */
class Question extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "Questions",
      serverSidePagination: false, 
      base: {
        title: "Question",
        exportDoc: "question",
        schema: schema,
        reqAuth: "Questionnaire.Question",

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
            title: "Add Question",
            url: datalink.Request.Add,
            success: "Question Added Successfully",
            fail: "Question Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add",
            Custom: this.renderInner
          },
          Delete: {
            title: "Delete this Question?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Question Deleted Successfully.",
            fail: "Question Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Question ",
            url: datalink.Request.Edit,
            success: "Question Edited Successfully",
            fail: "Question Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit",
            Custom: this.renderInner
          },
          Info: {
            title: "Questions ",
            url: datalink.Request.Info,
            success: "Questions Load Successfully",
            fail: "Questions Load Failed: ",
            schema: schema.Info,
            readOnly: true,
            Custom: this.renderInner
          },
          Import: {
            title: "Question Import",
            content: "",
            url: datalink.Request.Import,
            success: "Question Imported Successfully.",
            fail: "Question Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Question?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Question Deleted Successfully.",
            fail: "Question Delete Failed: ",
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          inlineOpposite: [
            //{ icon: <ArrowUpward/>, func: () => {}, caption: "Move Up" },
            //{ icon: <ArrowDownward/>, func: () => {}, caption: "Move Down" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add Question", reqFunc: "Add" }],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      },
      addOns: {}
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Question.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  renderInner(docID, doc, onQuit, onQuitRefresh, renderFormizo, addOns){
    return (
      <HStack alignItems="flex-start">
        {renderFormizo()}
        <Box width="30%">
          <img src="/Images/Placeholder/Capture4.PNG" alt=""/>
        </Box>
      </HStack>
    );
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
    let {base, serverSidePagination, title, addOns} = this.state;
    if(!Authority.IsAccessibleQ("Questionnaire.Question")) return <Denied/>;
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

export default Question;
