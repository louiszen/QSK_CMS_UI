import React, { Component } from 'react';

import PropsType from 'prop-types';

import { Accessor, Authority } from '@IZOArc/STATIC';

/**
 * Accessizo - Control access with IZO authority tree
 * @augments {Component<Props, State>}
 */
class Accessizo extends Component {

  static propTypes = {
    reqAuth: PropsType.string,
    reqLevel: PropsType.number,
    reqFunc: PropsType.string,
    auth: PropsType.object,
    level: PropsType.number.isRequired
  }

  static defaultProps = {
    reqAuth: "",
    reqLevel: 999,
    reqFunc: "",
    auth: null,
    level: 999
  }

  constructor(){
    super();
    this.state = {
      pass: false
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Accessizo.defaultProps))){
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
      let {auth, level, reqLevel, reqAuth, reqFunc} = this.state;
      this.setState({
        pass: Authority.IsAccessible(auth, level, reqAuth, reqLevel, reqFunc)
      });
    });
  }

  render(){
    let {pass} = this.state;
    if(pass) return this.props.children;
    return <div/>;
  }

}

export default Accessizo;
