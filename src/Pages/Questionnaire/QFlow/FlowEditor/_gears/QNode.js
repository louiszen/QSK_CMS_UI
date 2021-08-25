import React, { Component } from 'react';
import { Accessor, ColorX } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Typography } from '@material-ui/core';
import { Add, ArrowDownward, ArrowRightAltSharp, Check, Clear } from '@material-ui/icons';
import { StyledIconButton } from 'IZOArc/LabIZO/Stylizo';

import "./Node.css";

class QNode extends Component {

  static propTypes = {
    onMounted: PropsType.func,
  }

  static defaultProps = {
    onMounted: null,
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QNode.defaultProps))){
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
      if(this.props.onMounted){
        this.props.onMounted({
          
        });
      }
      if(callback) callback();
    });
  }

  renderNode(){
    let {item} = this.props;
    let style = {
      background: ColorX.GetBGColorCSS('red'),
      overflow: "hidden",
    }

    return (
      <VStack width={150} height={75} style={style} justifyContent="center">
        <Typography>
          {item.ref}
        </Typography>
      </VStack>
    );
  }

  renderArrow(){
    return (
      <VStack width={50}>
        <ArrowRightAltSharp/>
      </VStack>
    );
  }

  renderDown(){
    return (
      <VStack width={50} style={{position: "absolute", top: 80, left: 50}}>
        <ArrowDownward/>
      </VStack>
    );
  }

  renderAdd(){
    return (
      <StyledIconButton width={50} style={{position: "absolute", top: 12, left: 150}}>
        <Add />
      </StyledIconButton>
    );
  }

  renderBottomAdd(){
    return (
      <StyledIconButton width={50} style={{position: "absolute", top: 75, left: 50,}}>
        <Add />
      </StyledIconButton>
    );
  }

  renderTick(){
    return (
      <VStack width={50} style={{position: "absolute", top: 25, left: 125, color: ColorX.GetColorCSS("green")}}>
        <Check/>
      </VStack>
    );
  }

  renderCross(){
    return (
      <VStack width={50} style={{position: "absolute", top: 62, left: 50, color: ColorX.GetColorCSS("red")}}>
        <Clear/>
      </VStack>
    );
  }

  render(){
    let {item} = this.props;
    return (
      <HStack width="100%" justifyContent="flex-start" alignItems="center" 
        style={{position: "absolute", top: 20 + item.pos[1] * 100, left: 20 + item.pos[0] * 200}}>
        {this.renderNode()}
        {this.renderTick()}
        {this.renderCross()}
        {item.yes? this.renderArrow() : this.renderAdd()}
        {item.no? this.renderDown() : this.renderBottomAdd()}
      </HStack>
    );
  }

}

export default QNode;
