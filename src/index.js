import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

//react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//page
import Container from "IZOArc/Container/Container";
import Home from "Home/Home";
import { Denied, NoMatch, Login, Landing, System } from "IZOArc/Fallback";

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
  AnalytizoTest,
  FlowizoTest
} from "IZOArc/LabIZO/__TEST";

//pages
import Dashboard from "Pages/Dashboard/Dashboard";

import Answer from "Pages/Answer/Answer";
import ArrivalAnsTemp from "Pages/Answer/ArrivalAns/Template/Template";
import ArrivalAnsComp from "Pages/Answer/ArrivalAns/Components/Components";
import ArrivalAnsMisc from "Pages/Answer/ArrivalAns/Miscellaneous/Miscellaneous";

import Questionnaire from "Pages/Questionnaire/Questionnaire";
import Severity from "Pages/Severity/Severity";
import TransitAnsTemp from "Pages/Answer/TransitAns/Template/Template";
import TransitAnsComp from "Pages/Answer/TransitAns/Components/Components";
import DepartAnsTemp from "Pages/Answer/DepartAns/Template/Template";
import DepartAnsComp from "Pages/Answer/DepartAns/Components/Components";
import DepartAnsMisc from "Pages/Answer/DepartAns/Miscellaneous/Miscellaneous";
import IconDocs from "Pages/IconDocs/IconDocs";

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
    <Route key={7} path='/Answer/ArrivalAns/Miscellaneous' exact component={ArrivalAnsMisc}/>,
    <Route key={8} path='/Answer/DepartAns/Template' exact component={DepartAnsTemp}/>,
    <Route key={9} path='/Answer/DepartAns/Components' exact component={DepartAnsComp}/>,
    <Route key={10} path='/Answer/DepartAns/Miscellaneous' exact component={DepartAnsMisc}/>,
    <Route key={11} path='/Answer/TransitAns/Template' exact component={TransitAnsTemp}/>,
    <Route key={12} path='/Answer/TransitAns/Components' exact component={TransitAnsComp}/>,
    <Route key={13} path='/Landing' exact component={Landing}/>,
    <Route key={14} path='/IconDocs' exact component={IconDocs}/>,

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
    <Route key={6} path='/Test/Flowizo' exact component={FlowizoTest} />,
  ];
}

store.isLoading(false);
store.clearAsk();
store.clearAlert();
store.clearBackdrop();
if(store.isLoggedIn()){
  Env.CheckInitialized();
}

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/Home' exact component={Home} />
        <Route path='/Login' exact component={Login} />
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
