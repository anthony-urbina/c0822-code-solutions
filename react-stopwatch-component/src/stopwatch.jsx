import React from 'react';

class Stopwatch extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='frame'>
          <p>0</p>
        </div>
        <i className="fa-solid fa-play"></i>
      </div>
    );
  }
}

export default Stopwatch;
