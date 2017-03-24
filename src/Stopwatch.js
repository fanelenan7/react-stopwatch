import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {
      time: 0
    }
  }
  resetButton(){
    clearInterval(this.state.time)
    this.state.time = 0
  }
  startButton(){
    setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      })
    }, 1000)
  }
  // startButton(){
  //   this.setState(
  //      time: setInterval(() => {this.state.time + 1}, 1000)
  //   )
  // }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={()=>this.resetButton()}>Reset</button>
          <button onClick={()=> this.startButton()}>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
