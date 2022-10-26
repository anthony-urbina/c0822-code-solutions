import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, running: false, icon: 'fa-solid fa-play' };
    this.startTick = this.startTick.bind(this);
  }

  startTick() {
    let intervalID;
    if (!this.state.running) {
      intervalID = setInterval(() => {
        this.setState({ time: this.state.time + 1, running: true, icon: 'fa-solid fa-pause', intervalID });
      }, 1000);
    }
    this.stopTick(this.state.intervalID);
  }

  stopTick(interval) {
    clearInterval(interval);
    this.setState({ running: false, icon: 'fa-solid fa-play' });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='frame'>
            <p>{this.state.time}</p>
          </div>
        </div>
        <div className='row'>
          <i onClick={this.startTick} className={this.state.icon}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
