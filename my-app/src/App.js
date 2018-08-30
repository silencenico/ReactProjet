import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import PersonStateComponent from './component/PersonStateComponent';
import Loader from './component/Loader';
import ReactDOM from 'react-dom';
import { serialize } from 'uri-js';

const HelloWorld = (props) => {
    const sayHi = (event) => alert('Hello World')
    return (
      <div onClick = {sayHi}>Hello World</div>
    )
}

class App extends Component {
  forceUpdateHandler = () => {
    this.forceUpdate();
  }
  findDomNodeHandler = () => {
    let myDiv = document.getElementById("myDiv")
    ReactDOM.findDOMNode(myDiv).style.color = "green"
  }
  
  render() {
      const i = 1;
      let myStyle = {
        fontSize:100,
        color:'#FF0000'
      }
      let arr = ["one","two","three"]
    return (
      <div className="App">
          <HeaderComponent appName = "Nicolas Tang"/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{1+1}</h1>
        <h1>{i == 1 ? 'True' : 'False'}</h1>
        <h1 style={myStyle}>Lesson React</h1>
        {/*
          This is an array demo
        */}
        <h4>{arr}</h4>
        <PersonStateComponent/>
        <Loader/>
        <HelloWorld/>

        <button onClick = {this.forceUpdateHandler}>Force Update</button>
        <h4>Random Number : {Math.random()}</h4>

        <button onClick = {this.findDomNodeHandler}>Find Dom Node</button>
        <div id="myDiv">Node</div>

      </div>
    );
  }
}

export default App;
