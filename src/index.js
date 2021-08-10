import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

//react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//page
import Container from "@IZOArc/Container/Container";
import { Denied, NoMatch } from "@IZOArc/Fallback";
import Home from "./Home/Home";

//css
import "./index.css";
import "./preset.css";

//others
import * as serviceWorker from "./serviceWorker";

//tests
import {
  FormizoTest,
  TablizoTest,
  MsgizoTest,
  StylizoTest, 
  StepizoTest,
  AnalytizoTest
} from "@IZOArc/LabIZO/__TEST";

//pages
import Dashboard from "Pages/Dashboard/Dashboard";
import System from "Pages/System/System"
import Answer from "./Pages/Answer/Answer";
import ArrivalAns from "Pages/Answer/ArrivalAns/ArrivalAns";
import APProc from "Pages/Answer/ArrivalAns/APProc/APProc";
import BNEReq from "Pages/Answer/ArrivalAns/BNEReq/BNEReq";
import QUAReq from "Pages/Answer/ArrivalAns/QUAReq/QUAReq";
import DepartAns from "Pages/Answer/DepartAns/DepartAns";
import TransitAns from "Pages/Answer/TransitAns/TransitAns";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";
import Question from "Pages/Questionnaire/Question/Question";
import Scenario from "Pages/Questionnaire/Scenario/Scenario";
import Severity from "./Pages/Severity/Severity";
import Location from "Pages/Severity/Location/Location";
import SevGroup from "Pages/Severity/SevGroup/SevGroup";

//store
import {Env, store} from '@IZOArc/STATIC';

//mute the console on production launch
if (process.env.NODE_ENV === "production") {
  window.console.log = () => {};
}

function renderPages() {
  return [
    <Route key={0} path='/Dashboard' exact component={Dashboard}/>,
    <Route key={1} path='/System' exact component={System}/>,
    <Route key={2} path='/Answer' exact component={Answer}/>,
    <Route key={3} path='/Questionnaire' exact component={Questionnaire}/>,
    <Route key={4} path='/Severity' exact component={Severity}/>,
    <Route key={5} path='/Answer/ArrivalAns' exact component={ArrivalAns}/>,
    <Route key={6} path='/Answer/ArrivalAns/APProc' exact component={APProc}/>,
    <Route key={7} path='/Answer/ArrivalAns/BNEReq' exact component={BNEReq}/>,
    <Route key={8} path='/Answer/ArrivalAns/QUAReq' exact component={QUAReq}/>,
    <Route key={9} path='/Answer/DepartAns' exact component={DepartAns}/>,
    <Route key={10} path='/Answer/TransitAns' exact component={TransitAns}/>,
    <Route key={11} path='/Questionnaire/Question' exact component={Question}/>,
    <Route key={12} path='/Questionnaire/Scenario' exact component={Scenario}/>,
    <Route key={13} path='/Severity/Location' exact component={Location}/>,
    <Route key={14} path='/Severity/SevGroup' exact component={SevGroup}/>
  ];
}

function renderTest() {
  if (process.env.NODE_ENV === "production") return;
  return [
    <Route key={0} path='/Test/Formizo' exact component={FormizoTest} />,
    <Route key={1} path='/Test/Tablizo' exact component={TablizoTest} />,
    <Route key={2} path='/Test/Msgizo' exact component={MsgizoTest} />,
    <Route key={3} path='/Test/Stylizo' exact component={StylizoTest} />,
    <Route key={4} path='/Test/Stepizo' exact component={StepizoTest} />,
    <Route key={5} path='/Test/Analytizo' exact component={AnalytizoTest} />,
  ];
}

store.isLoading(false);
store.clearAsk();
if(store.isLoggedIn()){
  Env.CheckInitialized();
}

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Denied' exact component={Denied} />
        {renderPages()}
        {renderTest()}
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();