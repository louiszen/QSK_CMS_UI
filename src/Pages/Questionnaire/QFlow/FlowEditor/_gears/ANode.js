import React, { Component } from 'react';
import { Accessor, ColorX } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { Typography } from '@material-ui/core';

class ANode extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(ANode.defaultProps))){
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
      background: ColorX.GetBGColorCSS('blue'),
      borderRadius: 100,
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

  render(){
    let {item} = this.props;
    return (
      <HStack width="100%" justifyContent="flex-start" alignItems="center" 
        style={{position: "absolute", top: 20 + item.pos[1] * 100, left: 20 + item.pos[0] * 200}}>
        {this.renderNode()}
      </HStack>
    );
  }

}

export default ANode;
