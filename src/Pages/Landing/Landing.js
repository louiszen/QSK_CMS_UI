import React, { Component } from 'react';
import { Accessor, Authority, store } from 'IZOArc/STATIC';

import { Denied } from 'IZOArc/Fallback';
import Formizo from 'IZOArc/LabIZO/Formizo';
import { DOMAIN } from '__Base/config';
import axios from 'axios';

import schema from './schema';
import { VStack } from 'IZOArc/LabIZO/Stackizo';

/**
 * @augments {Component<Props, State>}
 */
class Landing extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates(() => {
      this.getLandingConfig();
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Landing.defaultProps))){
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

  getLandingConfig = async () => {
    let { addOns } = this.props;
    let url = DOMAIN + "/Config/Landing/Info";
    let payloadOut = {
      JWT: store.user.JWT,
      data: {},
      addOns: addOns,
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log("/Config/Landing/Info", res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        this.setState({
          doc: payload
        });
      } else {
        store.Alert("Cannot get Landing Config", "error");
      }
    } catch (e) {
      store.Alert("Cannot get Landing Config", "error");
    }
  }
  
  Config = {
    onSubmit: async (formProps) => {
      let { addOns } = this.props;
      let url = DOMAIN + "/Config/Landing/Edit";
      let payloadOut = {
        JWT: store.user.JWT,
        data: formProps,
        addOns: addOns,
      };
      try {
        let res = await axios.post(url, payloadOut);
        console.log("/Config/Landing/Edit", res.data);
      
        let { Success } = res.data;
      
        if (Success === true) {
          store.Alert("Edit Landing Config Successful", "success");
          this.getLandingConfig();
        } else {
          store.Alert("Edit Landing Config Failed", "error");
        }
      } catch (e) {
        store.Alert("Edit Landing Config Failed", "error");
      }
    }
  }

  renderFormizo() {
    let {doc} = this.state;
    return (
      <Formizo
        schema={schema.Landing}
        defaultValue={doc}
        buttons={["Revert", "Submit"]}
        onSubmit={this.Config.onSubmit}
        />
    );
  }

  render(){
    if(!Authority.IsAccessibleQ("Landing")) return <Denied/>;
    return (
      <VStack>
        {this.renderFormizo()}
      </VStack>
    );
  }

}

export default Landing;
