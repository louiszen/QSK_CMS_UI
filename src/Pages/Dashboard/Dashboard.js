import React, { Component } from 'react';
import { Accessor, Authority, ColorX, LocaleX } from 'IZOArc/STATIC';
import { HStack, Spacer, VStack } from 'IZOArc/LabIZO/Stackizo';
import { ButtonBase } from '@material-ui/core';
import { Typography } from 'antd';
import { Box } from '@mui/system';
import { IZOFontFamily } from '__SYSDefault/Theme';
import { observer } from 'mobx-react';
import { SITEBASE } from '__SYSDefault/Domain';

/**
 * @augments {Component<Props, State>}
 */
class Dashboard extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Dashboard.defaultProps))){
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

  toPage = (page) => {
    this.props.history.push(page);
  }

  renderSubmitPermit(){
    if(!Authority.IsAccessibleQ("SubmitPermit")) return;
    return (
      <ButtonBase style={{
          borderRadius: 25,
          borderColor: ColorX.GetBGColorCSS("grey", 0.5),
          borderWidth: 2,
          borderStyle: "solid"
        }} onClick={() => this.toPage("SubmitPermit")}>
        <HStack marginX={5}>
          <Typography style={{
            width: 200,
            fontSize: 26,
            fontFamily: IZOFontFamily
          }}>
            {LocaleX.Get("Dashboard.Submit")}
          </Typography>
          <Box>
            <img src={SITEBASE + "Images/Permit/submit.png"} alt="submit"/>
          </Box>
        </HStack>
      </ButtonBase>
    );
  }

  renderViewSubmit(){
    if(!Authority.IsAccessibleQ("Submission")) return;
    return (
      <ButtonBase style={{
          borderRadius: 25,
          borderColor: ColorX.GetBGColorCSS("grey", 0.5),
          borderWidth: 2,
          borderStyle: "solid"
        }}
        onClick={() => this.toPage("Submission")}>
        <HStack marginX={5}>
          <Typography style={{
              width: 200,
              fontSize: 26,
              fontFamily: IZOFontFamily
            }}>
            {LocaleX.Get("Dashboard.View")}
          </Typography>
          <Box>
            <img src={SITEBASE + "Images/Permit/approve.png"} alt="approve"/>
          </Box>
        </HStack>
      </ButtonBase>
    );
  }

  render(){
    return (
      <VStack spacing={20}>
        <Spacer/>
        {this.renderSubmitPermit()}
        {this.renderViewSubmit()}
        <Spacer/>
      </VStack>
    );
  }

}

export default observer(Dashboard);
