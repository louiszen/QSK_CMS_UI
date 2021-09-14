import React, { Component } from 'react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';

import { VStack, HStack } from 'IZOArc/LabIZO/Stackizo';
import { StyledButton } from 'IZOArc/LabIZO/Stylizo';
import Flowizo from 'IZOArc/LabIZO/Flowizo/Flowizo';
/**
 * @augments {Component<Props, State>}
 */
class FlowizoWrap extends Component {

  static propTypes = {
    defaultData: PropsType.array,
    addOns: PropsType.object,
    onDataUpdated: PropsType.func,
    readOnly: PropsType.bool
  }

  static defaultProps = {
    defaultData: [],
    addOns: {},
    onDataUpdated: null,
    readOnly: false
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(FlowizoWrap.defaultProps))){
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

  onMountFlowizo = (callbacks) => {
    this.MountFlowizo = callbacks;
  }

  onDataUpdated = (data) => {
    console.log("onDataUpdated");
    this.setState({
      flowizoData: data
    }, () => {
      let {onDataUpdated} = this.props;
      let {flowizoData} = this.state;
      if(onDataUpdated){
        onDataUpdated(flowizoData);
      }
    })
  }

  addQ = () => {
    let {readOnly} = this.props;
    if(readOnly) return;
    this.MountFlowizo.AddNode("Rect_YesNo");
  }

  addA = () => {
    let {readOnly} = this.props;
    if(readOnly) return;
    this.MountFlowizo.AddNode("Tube_End");
  }

  getData = () => {
    console.log(this.state.flowizoData);
  }

  render(){
    let {defaultData, addOns, readOnly} = this.props;
    return (
      <VStack width="100%" height="100%">
        <HStack spacing={10}>
          <StyledButton onClick={() => this.addQ()} theme={{color: readOnly? "grey": "yellow"}}>
            {"Add Question"}
          </StyledButton>
          <StyledButton onClick={() => this.addA()} theme={{color: readOnly? "grey": "blue"}}>
            {"Add Answer"}
          </StyledButton>
        </HStack>
        <Flowizo
          defaultData={defaultData}
          onMounted={this.onMountFlowizo}
          onDataUpdated={this.onDataUpdated}
          controlsProps={{}}
          reactFlowProps={{}}
          addOns={addOns}
          readOnly={readOnly}
          />
      </VStack>
    );
  }

}

export default FlowizoWrap;
