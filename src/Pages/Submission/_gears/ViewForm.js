import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Accessor, LocaleX } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, Spacer, VStack } from 'IZOArc/LabIZO/Stackizo';
import PermitForm from 'Mods/PermitForm';
import _ from 'lodash';
import Formizo from 'IZOArc/LabIZO/Formizo';
import { Typography } from '@mui/material';
import { IZOFontFamily } from '__SYSDefault/Theme';
import moment from 'moment';
import 'moment/locale/zh-hk';

/**
 * @augments {Component<Props, State>}
 */
class ViewForm extends Component {

  static propTypes = {
    docID: PropsType.string,
    doc: PropsType.object,
    onQuit: PropsType.func,
    onQuitRefresh: PropsType.func,
    renderFormizo: PropsType.func,
    addOns: PropsType.object
  }

  static defaultProps = {
    docID: null,
    doc: null,
    onQuit: null,
    onQuitRefresh: null,
    renderFormizo: null,
    addOns: null
  }

  static InfoStyle = {
    fontFamily: IZOFontFamily
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(ViewForm.defaultProps))){
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

  getFormData = () => {
    let {doc} = this.props;
    return doc.formData;
  }

  getPermitInfo = () => {
    let {doc, addOns} = this.props;
    let permitInfo = _.find(addOns.allPermits, o => o._id === doc.permitRefID);
    return permitInfo;
  }

  getAllSchema = () => {
    let {doc} = this.props;
    return PermitForm[doc.permitRefID];
  }

  getStep = (mod = 0) => {
    let {doc} = this.props;
    let permitInfo = this.getPermitInfo();
    return permitInfo.steps[doc.status + mod];
  }

  getStepSchema = (mod = 0) => {
    let allSchema = this.getAllSchema();
    let step = this.getStep(mod);
    return allSchema[step.form];
  }

  renderForm(){
    let schema = this.getStepSchema();
    let formData = this.getFormData();
    return (
      <VStack>
        <Formizo
          schema={schema}
          height="100%"
          defaultValue={formData}
          readOnly={true}
          buttons={[]}
          width={700}
          fieldStyle={"standard"}
          />
      </VStack>
    );
  }

  renderFormType(){
    let permitInfo = this.getPermitInfo();
    return (
      <HStack width={700}>
        <Typography>
          {LocaleX.Parse({
            EN: "Permit Type:",
            TC: "工作證種類:"
          })}
        </Typography>
        <Spacer/>
        <Typography>
          {LocaleX.Parse(permitInfo.name)}
        </Typography>
      </HStack>
    );
  }

  renderFormStatus(){
    let step = this.getStep();
    return (
      <HStack width={700}>
        <Typography>
          {LocaleX.Parse({
            EN: "Status:",
            TC: "申請狀態:"
          })}
        </Typography>
        <Spacer/>
        <Typography>
          {LocaleX.Parse(step.name)}
        </Typography>
      </HStack>
    );
  }

  renderSubmittedBy(){
    let {doc} = this.props;
    return (
      <HStack width={700}>
        <Typography>
          {LocaleX.Parse({
            EN: "Submitted by:",
            TC: "申請者:"
          })}
        </Typography>
        <Spacer/>
        <Typography>
          {doc.submitedBy}
        </Typography>
      </HStack>
    );
  }

  renderSubmittedTime(){
    let {doc} = this.props;
    let {inTime} = doc;
    let timeLocale = {};
    if(inTime){
      timeLocale = {
        EN: moment(inTime).locale("en").format("LLL"),
        TC: moment(inTime).locale("zh-hk").format("LLL")
      };
    }
    return (
      <HStack width={700}>
        <Typography>
          {LocaleX.Parse({
            EN: "Submitted at:",
            TC: "申請時間:"
          })}
        </Typography>
        <Spacer/>
        <Typography>
          {LocaleX.Parse(timeLocale)}
        </Typography>
      </HStack>
    );
  }

  renderInfo(){
    let {doc} = this.props;
    console.log(doc);
    return (
      <VStack height="fit-content" spacing={10}>
        {this.renderFormType()}
        {this.renderFormStatus()}
        {this.renderSubmittedBy()}
        {this.renderSubmittedTime()}
      </VStack>
    );
  }

  render(){
    let {docID} = this.props;
    if(!docID) return <div/>;
    return (
      <VStack spacing={20} height="90%" paddingBottom={2}>
        {this.renderInfo()}
        {this.renderForm()}
      </VStack>
    );
  }

}

export default observer(ViewForm);
