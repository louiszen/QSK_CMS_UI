import React, { Component } from 'react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { StyledButton } from 'IZOArc/LabIZO/Stylizo';
import { Box, Typography } from '@material-ui/core';
import { HStack } from 'IZOArc/LabIZO/Stackizo';
import _ from 'lodash';
import SNode from './SNode';
import QNode from './QNode';
import ANode from './ANode';

class Editor extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Editor.defaultProps))){
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

  renderFlow(){
    let {flow, selectedSeverity} = this.props;
    flow = _.filter(flow, (o, i) => o.severity === selectedSeverity);
    return _.map(flow, (o, i) => {
      switch(o.type){
        case 'severity': return <SNode key={i} item={o}/>;
        case 'question': return <QNode key={i} item={o}/>;
        case 'answer': return <ANode key={i} item={o}/>;
      }
    })
  }

  render(){
    return (
      <Box width="100%" height="100%" padding={2} style={{position: "relative"}}>
        {this.renderFlow()}
      </Box>
    );
  }

}

export default Editor;
