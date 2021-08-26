import React, { Component } from 'react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Typography } from '@material-ui/core';
import _ from 'lodash';
import { StyledIconButton } from 'IZOArc/LabIZO/Stylizo';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

/**
 * @augments {Component<Props, State>}
 */
class QOrderInner extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QOrderInner.defaultProps))){
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

  renderHeader(){
    return (
      <HStack width="100%">
        <Typography style={{width: 200, fontWeight: "bold"}}>{"Question"}</Typography>
        <Typography style={{width: 100}}>{" "}</Typography>
        <Typography style={{width: 100}}>{" "}</Typography>
      </HStack>
    );
  }

  renderPre(){
    let {data} = this.props;
    return _.map(data.pre, (o, i) => {
      return (
        <HStack width="100%">
          <Typography style={{width: 200}}>{o}</Typography>
          <StyledIconButton width={100}><ArrowUpward/></StyledIconButton>
          <StyledIconButton width={100}><ArrowDownward/></StyledIconButton>
        </HStack>
      );
    });
  }

  renderPost(){
    let {data} = this.props;
    return _.map(data.post, (o, i) => {
      return (
        <HStack width="100%">
          <Typography style={{width: 200}}>{o}</Typography>
          <StyledIconButton width={100}><ArrowUpward/></StyledIconButton>
          <StyledIconButton width={100}><ArrowDownward/></StyledIconButton>
        </HStack>
      );
    });
  }

  renderNext(){
    return (
      <HStack width="100%">
        <Typography style={{width: 200, fontWeight: "bold"}}>{"NEXT"}</Typography>
      </HStack> 
    );
  }

  render(){
    
    return (
      <VStack width="100%">
        {this.renderHeader()}
        {this.renderPre()}
        {this.renderNext()}
        {this.renderPost()}
      </VStack>
    );
  }

}

export default QOrderInner;
