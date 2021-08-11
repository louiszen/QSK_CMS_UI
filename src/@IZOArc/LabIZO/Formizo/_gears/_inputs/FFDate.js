import React, { Component } from 'react';

import PropsType from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { DatePicker, TimePicker } from 'antd';
import { FormControl, FormHelperText, FormLabel } from '@material-ui/core';

import 'antd/dist/antd.css';

import { Accessor } from '@IZOArc/STATIC';
import { HStack, Spacer } from '@IZOArc/LabIZO/Stackizo';
import { OutlinedBox } from '@IZOArc/LabIZO/Stylizo';

class FFDate extends Component {

  static propTypes = {
    //data
    ischema: PropsType.object.isRequired,
    iname: PropsType.string.isRequired,
    itype: PropsType.string.isRequired,

    //root func
    _onValueChange: PropsType.func.isRequired,
    _onBlurInlineSubmit: PropsType.func.isRequired,
    _onInlineSubmit: PropsType.func.isRequired,
    _onFieldFocus: PropsType.func.isRequired,
    _onFieldBlur: PropsType.func.isRequired,

    //disability
    errorsShowOnHelperText: PropsType.bool.isRequired,
    readOnly: PropsType.bool.isRequired,

    //runtime
    formValue: PropsType.object.isRequired,
    formError: PropsType.object.isRequired,

    //style
    ifieldStyle: PropsType.oneOf([
      "grid", "standard", "filled", "outlined"
    ]).isRequired
  }

  static defaultProps = {
    ischema: {},
    iname: "",
    itype: "date",

    _onValueChange: () => {},
    _onBlurInlineSubmit: () => {},
    _onInlineSubmit: () => {},
    _onFieldFocus: () => {},
    _onFieldBlur: () => {},

    errorsShowOnHelperText: true,
    readOnly: false,
    
    formValue: {},
    formError: {},

    fieldStyle: "grid"
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(FFDate.defaultProps))){
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
    }), () => {
      let {formValue, ischema, iname, _Validate, _onValueChange} = this.state;
      let ivalue = Accessor.Get(formValue, iname);
      if(!_.isEmpty(ischema.validate)){
        _Validate(iname, ivalue, ischema.validate);
      }
      if(!ivalue && ischema.defaultValue){
        _onValueChange(iname, ischema.defaultValue, ischema.validate);
      }
    });
  }

  renderTimePicker(){
    let {ischema, iname, itype, formValue,  
      _onValueChange, _onBlurInlineSubmit, 
      _onFieldFocus, _onFieldBlur, readOnly} = this.state;
    if(!ischema) return null;
    let ivalue = Accessor.Get(formValue, iname);
    let idateformat = ischema.dateFormat || "DD/MM/YYYY HH:mm";
    let mvalue;
    if(idateformat === "UTC"){
      mvalue = moment(ivalue);
    }else{
      mvalue = ivalue ? moment(ivalue, idateformat) : "";
    }
    
    let ireadOnly = ischema.readOnly || readOnly;
    return (
      <TimePicker
        value={moment.isMoment(mvalue)? mvalue : null}
        picker={itype}
        showTime={itype === "datetime"}
        onChange={(moment) =>
          _onValueChange(iname, 
            moment && moment.format(idateformat), ischema.validate)
        }
        onFocus={(e) => {
          _onFieldFocus();
        }}
        onBlur={(e) => {
          _onFieldBlur();
          _onBlurInlineSubmit(iname);
        }}
        disabled={ireadOnly}
        />
    );
  }

  renderDatePicker(){
    let {ischema, iname, itype, formValue,  
      _onValueChange, _onBlurInlineSubmit, 
      _onFieldFocus, _onFieldBlur, readOnly} = this.state;
    if(!ischema) return null;
    let ivalue = Accessor.Get(formValue, iname);
    let idateformat = ischema.dateFormat || "DD/MM/YYYY HH:mm";
    let mvalue;
    if(idateformat === "UTC"){
      mvalue = moment(ivalue);
    }else{
      mvalue = ivalue ? moment(ivalue, idateformat) : "";
    }
    
    let ireadOnly = ischema.readOnly || readOnly;
    return (
      <DatePicker
        value={moment.isMoment(mvalue)? mvalue : null}
        picker={itype}
        showTime={itype === "datetime"}
        onChange={(moment) =>
          _onValueChange(iname, 
            moment && moment.format(idateformat), ischema.validate)
        }
        onFocus={(e) => {
          _onFieldFocus();
        }}
        onBlur={(e) => {
          _onFieldBlur();
          _onBlurInlineSubmit(iname);
        }}
        disabled={ireadOnly}
        disabledDate={ischema.disabledDate}
        />
    );
  }

  renderPicker(){
    let {itype} = this.state;
    if(itype === "time"){
      return this.renderTimePicker();
    }
    
    return this.renderDatePicker();
  }

  render(){
    let {ischema, iname, ifieldStyle, formError, 
      errorsShowOnHelperText, readOnly} = this.state;
    if(!ischema) return null;
    
    let ireadOnly = ischema.readOnly || readOnly;

    let ierror = Accessor.Get(formError, iname);
    let helperText = ischema.helperText;
    if(errorsShowOnHelperText){
      helperText = ierror;
    }

    return (
      <FormControl 
        error={!_.isEmpty(ierror)}
        disabled={ireadOnly}>
          <HStack>
          {ifieldStyle === "grid"? 
            this.renderPicker() : 
            ifieldStyle === "outlined" ?
            <OutlinedBox label={ischema.label}>
              {this.renderPicker()}
            </OutlinedBox> :
            <HStack>
              <FormLabel className="formizo-h-m">{ischema.label}</FormLabel>
              {this.renderPicker()}
              <Spacer/>
            </HStack>
          }
          </HStack>
          {
            !_.isEmpty(helperText) &&
            <FormHelperText>
              {helperText}
            </FormHelperText>
          }
      </FormControl>
    );
  }

}

export default FFDate;
