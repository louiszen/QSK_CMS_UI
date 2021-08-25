import React, { Component } from 'react';
import { Accessor, ColorX } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Typography } from '@material-ui/core';
import { Add, ArrowRightAltSharp } from '@material-ui/icons';
import { StyledIconButton } from 'IZOArc/LabIZO/Stylizo';

class SNode extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(SNode
    .defaultProps))){
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
      background: ColorX.GetBGColorCSS('yellow'),
      borderRadius: 100,
      overflow: "hidden",
    }

    return (
      <VStack width={150} height={75} style={style} justifyContent="center">
        <Typography>
          {"Severity " + item.severity}
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

  renderAdd(){
    return (
      <StyledIconButton width={50}>
        <Add />
      </StyledIconButton>
    );
  }

  render(){
    let {item} = this.props;
    return (
      <HStack width="100%" justifyContent="flex-start" alignItems="center" 
        style={{position: "absolute", top: 20 + item.pos[1] * 100, left: 20 + item.pos[0] * 200}}>
        {this.renderNode()}
        {item.next? this.renderArrow() : this.renderAdd()}
      </HStack>
    );
  }

}

export default SNode;
