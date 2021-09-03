import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

//react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//page
import Container from "IZOArc/Container/Container";
import { Denied, NoMatch } from "IZOArc/Fallback";
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
} from "IZOArc/LabIZO/__TEST";

//pages
import Dashboard from "Pages/Dashboard/Dashboard";
import System from "Pages/System/System"
import Answer from "Pages/Answer/Answer";
import ArrivalAnsTemp from "Pages/Answer/ArrivalAns/Template/Template";
import ArrivalAnsComp from "Pages/Answer/ArrivalAns/Components/Components";
import ArrivalAnsMisc from "Pages/Answer/ArrivalAns/Miscellaneous/Miscellaneous";
import DepartAns from "Pages/Answer/DepartAns/DepartAns";
import TransitAns from "Pages/Answer/TransitAns/TransitAns";
import Questionnaire from "Pages/Questionnaire/Questionnaire";
import Severity from "Pages/Severity/Severity";

//store
import {Env, store} from 'IZOArc/STATIC';

//mute the console on production launch
if (process.env.NODE_ENV === "production") {
  window.console.log = () => {};
}

function renderPages() {
  return [
    <Route key={19} path='/cms' exact component={Dashboard}/>,
    <Route key={0} path='/Dashboard' exact component={Dashboard}/>,
    <Route key={1} path='/System' exact component={System}/>,
    <Route key={2} path='/Answer' exact component={Answer}/>,
    <Route key={3} path='/Questionnaire' exact component={Questionnaire}/>,
    <Route key={4} path='/Severity' exact component={Severity}/>,
    <Route key={5} path='/Answer/ArrivalAns/Template' exact component={ArrivalAnsTemp}/>,
    <Route key={6} path='/Answer/ArrivalAns/Components' exact component={ArrivalAnsComp}/>,
    <Route key={9} path='/Answer/DepartAns' exact component={DepartAns}/>,
    <Route key={10} path='/Answer/TransitAns' exact component={TransitAns}/>,
    <Route key={20} path='/Answer/ArrivalAns/Miscellaneous' exact component={ArrivalAnsMisc}/>,
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
