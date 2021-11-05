import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { observer } from 'mobx-react';
import axios from 'axios';
import { Box, Link, Typography } from '@material-ui/core';

import schema from './schema';
import { IZOTheme, DOMAIN, GateDis } from '__Base/config';
import Version from '__Base/version';

import Formizo from 'IZOArc/LabIZO/Formizo';
import { Accessor, store, ColorX, Env } from 'IZOArc/STATIC';
import { VStack, HStack, Spacer } from 'IZOArc/LabIZO/Stackizo';
import { StyledButton, StyledLinearProgress } from 'IZOArc/LabIZO/Stylizo';

class Home extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      username: "",
      userDisplayName: "",
      page: "user",
      loading: false,
      errorMsg: ""
    };
    
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Home.defaultProps))){
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

  onMountForm = (callbacks) => {
    this.MountForm = callbacks;
  }

  _CheckUser = (formProps) => {

    let url = DOMAIN + '/Base/Authorize/CheckUserName';
    let req = {
      ...formProps
    };

    this.setState({
      loading: true
    }, async () => {
      try {
        let res = await axios.post(url, req);
        console.log(res);
        let {Success, payload} = res.data;
        if(Success){
          if(payload.hasUser){

            this.setState({
              page: 'password',
              loading: false,
              username: formProps.username,
              userDisplayName: payload.UserDisplayName
            });
          }else{
            store.Alert("User not found", "error");
            this.setState({
              loading: false
            });
          }
        }
      }catch(e){
        store.Alert("Cannot connect to server", "error");
        this.setState({
          loading: false
        });
      }
    });
  
  }

  _Login = (formProps) => {
    console.log("_signIn");

    let {username} = this.state;
    let url = DOMAIN + '/Base/Authorize/SignIn';

    let req = {
      username: username,
      ...formProps
    };

    this.setState({
      loading: true
    }, async () => {
      try {
        let res = await axios.post(url, req);

        let {Success, payload} = res.data;
        if(Success === true){
          console.log(payload);
          store.setUser(payload);
          store.Alert("Login Successful", "success");
          await Env.CheckInitialized();

          if(!store.isInitialized()){
            this.setState({
              page: "initial",
              loading: false
            });
          }
          
        }else{
          store.Alert("Incorrect Password", "error");
          this.setState({
            loading: false
          });
        }
      }catch(e){
        store.Alert("Cannot connect to server", "error");
        this.setState({
          loading: false
        });
      }
    });
  }

  Init = {
    onClick: () => {
      store.Ask("Initialize project?",
        "(Caution: It will reset all data in database.)",
        () => {this.MountForm.Submit()}, null, false);
    },
    onSubmit: async (formProps) => {
      store.SetAskLoading(true);
      let url = DOMAIN + "/Base/Env/Init";
      let payloadOut = {
        JWT: store.user.JWT,
        ...formProps
      };

      console.log(payloadOut)

      try{
        let res = await axios.post(url, payloadOut);
        store.SetAskLoading(false);
        console.log("/Base/Env/Init", res.data);
        let {Success} = res.data;
        if(Success === true){
          this.Init.onSuccess(res, formProps);
          store.clearAsk();
          return {Success: true};
        }else{
          this.Init.onFail();
          return {Success: false};
        }
      }catch(e){
        this.Init.onFail(e);
        return {Success: false};
      }
      
    },
    onSuccess: async (res, formProps) => {
      
      store.Alert("Project Initialized Successfully.", "success");
      if(formProps.initialwatsons){
        let url = DOMAIN + "/Base/Env/InitWatsons";
        let payloadOut = {
          JWT: store.user.JWT
        };
        
        try{
          let res = await axios.post(url, payloadOut);
          console.log("/Base/Env/InitWatsons", res.data);
          let {Success} = res.data;
          if(Success === true){
            await Env.CheckInitialized();
            this.redirectToDashboard();
          }else{
            this.Init.onWatsonsFail();
          }
        }catch(e){
          this.Init.onWatsonsFail(e);
        }
      }else{
        store.isLoading(false);
        await Env.CheckInitialized();
        this.redirectToDashboard();
      }

    },
    onFail: async () => {
      store.isLoading(false);
      store.Alert("Project Cannot be Initialized.", "error");
      await Env.CheckInitialized();
    },
    onWatsonsFail: async () => {
      store.isLoading(false);
      store.Alert("Watsons Cannot be Initialized.", "error");
      await Env.CheckInitialized();
    },
    onError: (e) => {
      store.isLoading(false);
      store.Alert("Cannot connect to server.", "error");
    }
  }

  redirectToDashboard = () => {
    if(store.isInitialized){
      setTimeout(() => {
        this.props.history.push("/Dashboard");
        store.isLoading(false);
      }, 1000);
    }
  }
  
  renderNextButton(){
    let {loading} = this.state;
    return (
      <VStack width="100%" key="next">
        <StyledButton
          onClick={() => {
            this.MountForm.Submit();
          }}
          theme={{
            label: "white",
            background: loading? ColorX.GetColorCSS("elainOrangeDark") : ColorX.GetColorCSS(IZOTheme.foreground),
            hover: {
              background: ColorX.GetColorCSS("elainOrangeDark")
            },
            borderRadius: "0px", 
            width: "100%"
          }}
          disabled={loading}>
          <HStack>
            <div>NEXT</div>
            <Spacer/>
            <i className="fas fa-arrow-right"/>
          </HStack>
        </StyledButton>
        { loading &&
          <StyledLinearProgress theme={{bar: ColorX.GetColorCSS(IZOTheme.foreground), background: ColorX.GetColorCSS("elainOrangeDark")}}/>
        }
      </VStack>
    );
  }

  renderLoginButton(){
    let {loading} = this.state;
    return (
      <VStack width="100%" key="next">
        <StyledButton
          onClick={() => {
            this.MountForm.Submit();
          }}
          theme={{
            label: "white",
            background: loading? ColorX.GetColorCSS("elainOrangeDark") : ColorX.GetColorCSS(IZOTheme.foreground),
            hover: {
              background: ColorX.GetColorCSS("elainOrangeDark")
            },
            borderRadius: "0px", 
            width: "100%"
          }}
          disabled={loading}>
          <HStack>
            <div>Log in</div>
            <Spacer/>
            <i className="fas fa-arrow-right"/>
          </HStack>
        </StyledButton>
        { loading &&
          <StyledLinearProgress theme={{bar: ColorX.GetColorCSS(IZOTheme.foreground), background: ColorX.GetColorCSS("elainOrangeDark")}}/>
        }
      </VStack>
    );
  }

  renderForm(){
    let {page, loading} = this.state;
    return (
      <Formizo
        formID="login"
        height={ 
          page === "user"? "95px" : 
          page === "password"? "95px" :
          "225px"}
        schema={ 
          page === "user"? schema.loginName : 
          page === "password"? schema.loginPassword :
          schema.initial}
        buttons={[
          page === "user"? this.renderNextButton() :
          page === "password"? this.renderLoginButton() :
          this.renderInitial()
        ]}
        buttonPadding={0}
        onSubmit={
          page === "user"? this._CheckUser : 
          page === "password"? this._Login:
          this.Init.onSubmit
        }
        onMounted={this.onMountForm}
        fieldStyle="standard"
        fieldSize="small"
        errorsShowOnHelperText={false}
        theme={{
          textfield: {
            input: ColorX.GetColorCSS(IZOTheme.foreground),
            background: "transparent",
            line: "transparent"
          }
        }}
        disabled={{loading}}
        />
    );
  }

  backToUser = () => {
    this.setState({
      page: "user",
      username: "",
      userDisplayName: ""
    });
  }

  renderInitial(){
    let {loading} = this.state;
    return (
      <VStack width="100%" key="next">
        <StyledButton
          onClick={() => {
            this.Init.onClick();
          }}
          theme={{
            label: "white",
            background: loading? ColorX.GetColorCSS("elainOrangeDark") : ColorX.GetColorCSS(IZOTheme.foreground),
            hover: {
              background: ColorX.GetColorCSS("elainOrangeDark")
            },
            borderRadius: "0px", 
            width: "100%"
          }}
          disabled={loading}>
          <HStack>
            <div>Initialize</div>
            <Spacer/>
            <i className="fas fa-arrow-right"/>
          </HStack>
        </StyledButton>
        { loading &&
          <StyledLinearProgress 
            theme={{
              bar: ColorX.GetColorCSS(IZOTheme.foreground), 
              background: ColorX.GetColorCSS("elainOrangeDark")
            }}
            />
        }
      </VStack>
    );
  }

  renderHeaderMessage(){
    let {page, userDisplayName} = this.state;
    switch(page){
      default: case "user": return "Log in with your User ID";
      case "password": return (
        <Link onClick={() => this.backToUser()}>
          {"Not " + userDisplayName + " ?"}
        </Link>
      );
      case "initial": return "Press the button to initialize the project";
    }
  }

  renderInside(){
    return (
      <VStack width="100%">
        <Spacer/>
          <HStack>
            <VStack>
              <Box margin={1} width={1}>
              {this.renderHeaderMessage()}
              </Box>
              <Box width="300px" style={{background: "white"}}>
                {this.renderForm()}
              </Box>
            </VStack>
            <Spacer/>
          </HStack>
        <Spacer/>
      </VStack>
    );
  }

  renderEnv(){
    let env = Accessor.Get(store.server, "Env");
    let envStr = env? env.toUpperCase() : "";
    let style = {
      color: ColorX.GetColorCSS("grey", 0.5), 
      fontSize: 9
    };
    return (
      <Box style={{position: "absolute", bottom: 0}}>
        <Typography style={style}>
          {"[" + envStr + "]"}
        </Typography>
        <Typography style={style}>
          {"UI Version: " + Version}
        </Typography>
        <Typography style={style}>
          {"Backend Version: " + store.server.backendVersion}
        </Typography>
        <Typography style={style}>
          {"Start Date: " + process.env.REACT_APP_STARTDATE}
        </Typography>
        <Typography style={style}>
          {"Domain: " + DOMAIN}
        </Typography>
      </Box>
    );
  }

  renderLogo(){
    return (
      <VStack spacing="1px" alignItems="flex-start" width="100%">
        <Box style={GateDis.style}>
          <img src={GateDis.src} alt="Logo"/>
        </Box>
        {this.renderEnv()}
      </VStack>
    );
  }

  render(){
    return (
      <VStack style={{
          background: ColorX.GetColorCSS("aliceblue"), 
          color: ColorX.GetColorCSS(IZOTheme.foreground),
          width: "100%"
        }}>
        <Spacer/>
        <HStack spacing="75px">
          {this.renderLogo()}
          {this.renderInside()}
          <Spacer/>
        </HStack> 
        <Spacer/>
      </VStack>
    );
  }

}

export default withRouter(observer(Home));
