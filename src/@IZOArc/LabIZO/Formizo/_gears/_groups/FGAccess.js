import React, { Component } from 'react';

import PropsType from 'prop-types';
import _ from 'lodash';

import FItem from '../FItem';

import Accessizo from '@IZOArc/LabIZO/Accessizo';
import { Accessor } from '@IZOArc/STATIC';

class FGAccess extends Component {

  static propTypes = {
    //data
    ischema: PropsType.object.isRequired,

    //access
    auth: PropsType.object,
    level: PropsType.number,
  }

  static defaultProps = {
    //data
    ischema: {},

    //access
    auth: {},
    level: 999,
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(FGAccess.defaultProps))){
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

  renderSchema(){
    let {ischema, ...other} = this.props;
    return _.map(ischema.accessizo, (o, i) => {
      return (
        <FItem
          key={i}
          ischema={o}
          {...other}/>
      );
    });
  }

  render(){
    let {ischema, auth, level} = this.state;
    if(!ischema) return null;
    return (
      <Accessizo 
        reqAuth={ischema.reqAuth} 
        reqLevel={ischema.reqLevel} 
        reqFunc={ischema.reqFunc}
        auth={auth}
        level={level}>
        {this.renderSchema()}
      </Accessizo>
    );
  }

}

export default FGAccess;
