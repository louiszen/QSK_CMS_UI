import React, { Component } from 'react';
import { Accessor, ColorX, store } from '@IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, Spacer, VStack } from '@IZOArc/LabIZO/Stackizo';
import { Tooltip, Typography } from '@material-ui/core';
import _ from 'lodash';
import { DeleteForever, Edit, InfoOutlined } from '@material-ui/icons';
import { StyledIconButton } from '@IZOArc/LabIZO/Stylizo';

/**
 * @augments {Component<Props, State>}
 */
class QuestionBlock extends Component {

  static propTypes = {
    doc: PropsType.object,
    toEdit: PropsType.func,
    toInfo: PropsType.func,
    toDelete: PropsType.func
  }

  static defaultProps = {
    doc: {},
    toEdit: null,
    toInfo: null,
    toDelete: null,
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(QuestionBlock.defaultProps))){
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

  renderNoCond(){
    return (
      <Typography style={{fontSize: 14}}>
        {"No Conditions Required."}
      </Typography>
    )
  }

  renderEachStm(s, v){
    let style = {fontSize: 12};
    return (
      <HStack key={v} style={{background: ColorX.GetBGColorCSS("yellow")}} marginX={1} paddingX={1} justifyContent="flex-start" spacing={5}>
        <Typography style={style}>
          {"@" + s.ref}
        </Typography>
        <Typography style={{...style, fontWeight: "bold"}}>
          {"="}
        </Typography>
        <Typography style={style}>
          {s.$eq.toString()}
        </Typography>
      </HStack>
    )
  }

  renderEachCond(o, i){
    return (
      <VStack key={i} justifyContent="flex-start" width="100%">
        {_.map(o.$and, (s, v) => this.renderEachStm(s, v))}
      </VStack>
    );
  }

  renderCondList(){
    let {doc} = this.props;
    let conditions = Accessor.Get(doc, "conditions.$or");
    if(!conditions){
      return this.renderNoCond();
    }else{
      return (
        <VStack justifyContent="flex-start" width="100%" style={{overflow: "auto"}} paddingBottom={1}>
          {_.map(conditions, (o, i) => {
            return (
              <VStack width="100%" key={i}>
                {this.renderEachCond(o, i)}
                {
                  i !== conditions.length - 1 &&
                  <Typography style={{fontSize: 9, fontWeight: "bold"}}>
                    {"OR"}
                  </Typography>
                }
              </VStack>
            )})
          }
        </VStack>
      );
    }
  }

  renderQCond(){
    return (
      <VStack justifyContent="flex-start" width="100%" height={100} style={{background: ColorX.GetBGColorCSS("lightYellow")}}>
        <Typography style={{fontSize: 12, width: "100%", fontWeight: "bold"}}>
          {"Conditions:"}
        </Typography>
        {this.renderCondList()}
      </VStack>
    );
  }

  renderQ(){
    let {doc} = this.props;
    return (
      <VStack justifyContent="flex-start" width="100%" height={150} style={{background: ColorX.GetColorCSS("aliceblue")}}>
        <Typography style={{fontSize: 12, width: "100%", }}>
          {"Question:"}
        </Typography>
        <Typography style={{width: "100%"}}>
          {Accessor.Get(doc, "question.title.EN")}
        </Typography>
      </VStack>
    );
  }

  renderQuestion(){
    let {doc} = this.props;
    return (
      <VStack justifyContent="flex-start" width="100%">
        {this.renderQCond()}
        {this.renderQ()}
      </VStack>
    )
  }

  renderVerdict(){
    let {doc} = this.props;
    return (
      <VStack justifyContent="flex-start" width="100%">
        
      </VStack>
    );
  }

  renderIconButton(o){
    let {doc} = this.props;
    return (
      <HStack key={o.caption}>              
        <StyledIconButton theme={o.theme || {label: ColorX.GetColorCSS("pureDark", 0.54)}} size="small"
          onClick={(e) => {
            e.stopPropagation(); 
            if(o.func){
              o.func(doc._id, doc);
            }else{
              store && store.Alert("Function is not implemented.", "warn");  
            }
          }}>
          <Tooltip title={o.caption} arrow={true} placement="top">
            {o.icon}
          </Tooltip>
        </StyledIconButton>
      </HStack>
    );
  }

  renderRefID(){
    let {doc, toEdit, toInfo, toDelete} = this.props;
    return (
      <HStack width="100%">
        <Typography style={{width: "100%", fontSize: 18, fontWeight: "bold", color: doc.type === "verdict" ? ColorX.GetColorCSS("purple"): undefined}}>
          {Accessor.Get(doc, "refID")}
        </Typography>
        <Spacer/>
        <HStack width="fit-content">
          {this.renderIconButton({
            theme: {label: "blue"},
            caption: "Edit",
            icon: <Edit size="small"/>,
            func: toEdit
          })}
          {this.renderIconButton({
            theme: {label: "green"},
            caption: "Info",
            icon: <InfoOutlined size="small"/>,
            func: toInfo
          })}
          {this.renderIconButton({
            theme: {label: "red"},
            caption: "Delete",
            icon: <DeleteForever size="small"/>,
            func: toDelete
          })}
        </HStack>
      </HStack>
    );
  }

  render(){
    let {doc} = this.props;
    if(!doc) return <div/>;
    return (
      <VStack alignItems="flex-start" flexGrow={1} style={{width: 250, border: "2px solid " + ColorX.GetBorderColorCSS("elainOrange"), borderRadius: 15, marginRight: 5, overflow: "hidden", padding: 10}}>
        {this.renderRefID()}
        {doc.type === "question"? 
          this.renderQuestion()
          : this.renderVerdict()
        }
      </VStack>
    );
  }

}

export default QuestionBlock;
