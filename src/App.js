import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculate from "./Calculate"

class App extends Component {
  constructor(){
    super()
    this.state={
    	buttons: [],
    	clicked:false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(event){
    let name = event.target.name
    if(name === "AC"){
    	window.location.reload()
    }
    else{
      this.setState(state =>{
        	const buttons = state.buttons.concat(name)
        	return{
        	  buttons
        	}
        })
    }
  }

  handleSubmit(event){
  	console.log(this.state.buttons)
    this.setState({
    	clicked:true
    })
  }
  render() {
    return (
      <div className="calculator">
      <h1 style={{backgroundColor:"white", textAlign:"center"}}> Calculator</h1>
        <div className="left">
          <div>
            <button className="button" name="1" onClick={this.handleClick}>1</button>
            <button className="button" name="2" onClick={this.handleClick}>2</button>
            <button className="button" name="3" onClick={this.handleClick}>3</button>
            <button className="button" name="+" onClick={this.handleClick}>+</button>
          </div>
          <div>
            <button className="button" name="4" onClick={this.handleClick}>4</button>
            <button className="button" name="5" onClick={this.handleClick}>5</button>
            <button className="button" name="6" onClick={this.handleClick}>6</button>
            <button className="button" name="-" onClick={this.handleClick}>-</button>
          </div>
          <div>
            <button className="button" name="7" onClick={this.handleClick}>7</button>
            <button className="button" name="8" onClick={this.handleClick}>8</button>
            <button className="button" name="9" onClick={this.handleClick}>9</button>
            <button className="button" name="/" onClick={this.handleClick}>/</button>
          </div>
          <div>
            <button className="button" name="AC" onClick={this.handleClick}>AC</button>
            <button className="calculateButton" name="Submit" onClick={this.handleSubmit}>Calculate</button>
            <button className="button" name="*" onClick={this.handleClick}>*</button>
          </div>
        </div>
        <div className="right">
          <h1>{this.state.buttons}</h1>
          {this.state.clicked ? <Calculate calc={this.state.buttons} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
