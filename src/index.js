import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

//react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//page
import Container from "IZOArc/Container/Container";
import { Denied, NoMatch, Login, Landing, System, BugReport } from "IZOArc/Fallback";

//css
import "./index.css";
import "./preset.css";

//others
import * as serviceWorker from "./serviceWorker";

//tests
import {
  FormizoTest,
  TablizoTest,
  ChatizoTest,
  StylizoTest, 
  StepizoTest,
  AnalytizoTest,
  FlowizoTest
} from "IZOArc/LabIZO/__TEST";

//pages


//STORE
import {Env, STORE} from "IZOArc/STATIC";

//mute the console on production launch
if (process.env.NODE_ENV === "production") {
  window.console.log = () => {};
}

/**
 * 
 * @returns {[Route]}
 */
function renderPages() {
  return [

  ];
}

function renderTest() {
  if (process.env.NODE_ENV === "production") return;
  return [
    <Route key={0} path="/Test/Formizo" exact component={FormizoTest} />,
    <Route key={1} path="/Test/Tablizo" exact component={TablizoTest} />,
    <Route key={2} path="/Test/Chatizo" exact component={ChatizoTest} />,
    <Route key={3} path="/Test/Stylizo" exact component={StylizoTest} />,
    <Route key={4} path="/Test/Stepizo" exact component={StepizoTest} />,
    <Route key={5} path="/Test/Analytizo" exact component={AnalytizoTest} />,
    <Route key={6} path="/Test/Flowizo" exact component={FlowizoTest} />,
  ];
}

function renderIZOSystem(){
  return [
    <Route key={0} path="/Login" exact component={Login} />,
    <Route key={1} path="/Denied" exact component={Denied} />,
    <Route key={2} path="/BugReport" exact component={BugReport} />,
    <Route key={3} path="/System" exact component={System} />
  ];
}

STORE.isLoading(false);
STORE.clearAsk();
STORE.clearAlert();
STORE.clearBackdrop();
if(STORE.isLoggedIn()){
  Env.CheckInitialized();
}

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Switch>
        <Route path="/" exact component={Landing} />
        {renderIZOSystem()}
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
