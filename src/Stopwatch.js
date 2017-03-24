import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
      started: null
    }
  }
  resetButton(){
    clearInterval(this.state.started)
    this.setState({
      time: 0
    })
  }
  startButton(){
    const timerOn = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        started: timerOn
      })
    }, 1000)
  }

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
