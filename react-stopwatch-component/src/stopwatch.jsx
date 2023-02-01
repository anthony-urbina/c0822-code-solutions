import React, { useState } from 'react';

// class Stopwatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: 0, running: false };
//     this.startTick = this.startTick.bind(this);
//     this.chooseIcon = this.chooseIcon.bind(this);
//   }

//   startTick() {
//     if (!this.state.running) {
//       const intervalID = setInterval(() => {
//         this.setState({ time: this.state.time + 1, running: true, intervalID });
//       }, 1000);
//     }
//     this.stopTick(this.state.intervalID);
//   }

//   stopTick(interval) {
//     clearInterval(interval);
//     this.setState({ running: false });
//   }

//   chooseIcon() {
//     if (this.state.running) {
//       return 'fa-solid fa-pause';
//     }
//     return 'fa-solid fa-play';
//   }

//   render() {
//     return (
//       <div className='container'>
//         <div className='row'>
//           <div className='frame'>
//             <p>{this.state.time}</p>
//           </div>
//         </div>
//         <div className='row'>
//           <i onClick={this.startTick} className={this.chooseIcon()}></i>
//         </div>
//       </div>
//     );
//   }
// }

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTick = () => {
    if (!running) {
      const id = setInterval(() => {
        setRunning(true);
        setIntervalId(id);
        // setSecondsElapsed(secondsElapsed); // line a
        setSecondsElapsed(seconds => seconds + 1); // line b
      }, 1000);
    } else {
      stopTick(intervalId);
    }
  };

  const stopTick = () => {
    clearInterval(intervalId);
    setRunning(false);
  };

  const chooseIcon = () => {
    if (running) {
      return 'fa-solid fa-pause';
    }
    return 'fa-solid fa-play';
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='frame'>
          <p>{secondsElapsed}</p>
        </div>
      </div>
      <div className='row'>
        <i onClick={startTick} className={chooseIcon()}></i>
      </div>
    </div>
  );
}

export default Stopwatch;
