import React, { Component } from 'react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import _ from 'lodash';
import { Box } from '@material-ui/core';
import { StyledButton } from 'IZOArc/LabIZO/Stylizo';
import { HStack, Spacer, VStack } from 'IZOArc/LabIZO/Stackizo';

/**
 * @augments {Component<Props, State>}
 */
class LangTabs extends Component {

  static propTypes = {
    langs: PropsType.arrayOf(PropsType.string),
    func: PropsType.func
  }

  static defaultProps = {
    langs: ["EN", "TC", "SC"],
    func: () => {}
  }

  constructor(){
    super();
    this.state = {
      value: "EN"
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(LangTabs.defaultProps))){
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

  onChangeTab = (tab) => {
    this.setState({
      value: tab
    });
  }

  renderTabs(){
    let {langs} = this.props;
    let {value} = this.state;
    let ontheme = {
      height: 30,
      color: "blue",
      borderRadius: "0px"
    };
    let offtheme = {
      height: 30,
      color: "grey",
      borderRadius: "0px"
    };
    return _.map(langs, (o, i) => {
      return (
        <StyledButton key={i} onClick={() => this.onChangeTab(o)} theme={value === o? ontheme : offtheme}>
          {o}
        </StyledButton>
      )
    })
  }

  renderTabPanel(){
    let {value} = this.state;
    let {langs, func} = this.props;
    return _.map(langs, (o, i) => {
      if(value === o && _.isFunction(func)){
        return func(value);
      }
    });
  }

  render(){
    return (
      <VStack width="100%" height="100%">
        {this.renderTabPanel()}
        <Spacer/>
        <HStack spacing={5} justifyContent="flex-start">
          {this.renderTabs()}
        </HStack>
      </VStack>
    );
  }

}

export default LangTabs;
