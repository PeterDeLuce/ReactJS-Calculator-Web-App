//Author: Peter DeLuce 2020
//ReactJS Basic Web Calculator example

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Buttons from "./Component/buttons";
import * as serviceWorker from './serviceWorker';

import "./styles.css";

class App extends Component {
  state={
    result: " "
  };
//belows add the Buttons Component and calculator functions
  buttonPressed = value => {
    if (value === "=") {
      this.setState({
        result: eval(this.state.result)
      });
    } else if(value === "all-clear"){
      this.setState({
        result: " "
      });
    } else if(value === undefined){
      this.setState({
        result:value
      });
    }else {
      this.setState({
        result: this.state.result + value
      });
    }
  };
//below renders the calculator application
  render() {
    return (
      <div className="App">
        <h1>ReactJS Calculator App</h1>
        <h2>-Peter DeLuce</h2>
        <Buttons
        buttonPressed = {this.buttonPressed}
        valueInput = {this.state.result === " " ? 0 : this.state.result}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
// Credit to Costache Robert for his ReactJS tutorial