import React, { Component } from 'react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import { StyledButton } from 'IZOArc/LabIZO/Stylizo';
import _ from 'lodash';
import Editor from './_gears/Editor';

class FlowEditor extends Component {

  static propTypes = {
    onMounted: PropsType.func,
  }

  static defaultProps = {
    onMounted: null,
  }

  constructor(){
    super();
    this.state = {
      selectedSeverity: 1
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(FlowEditor.defaultProps))){
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

  selectSeverity = (o) => {
    this.setState({
      selectedSeverity: o
    });
  }

  renderSeverity(){
    let severities = [1, 2, 3, 4, 5, 99];
    let {selectedSeverity} = this.state;
    return (
      <HStack spacing={5} justifyContent="flex-start">
        {_.map(severities, (o, i) => {
          return (
            <StyledButton key={i} theme={{color: selectedSeverity === o ? "blue" : "grey"}} onClick={() => this.selectSeverity(o)}>
              {"Severity " + o}
            </StyledButton>
          )
        })}
      </HStack>
    );
  }

  renderEditor(){
    let {doc} = this.props;
    let {selectedSeverity} = this.state;
    return (
      <Editor flow={doc.flow} selectedSeverity={selectedSeverity}/>
    );
  }

  render(){
    return (
      <VStack width="100%" >
        {this.renderSeverity()}
        {this.renderEditor()}
      </VStack>
    );
  }

}

export default FlowEditor;
