import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchIsOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.switchIsOn ? this.setState({ switchIsOn: false }) : this.setState({ switchIsOn: true });
  }

  getSwitchClass() {
    const { switchIsOn } = this.state;
    if (switchIsOn) {
      return { sliderPosition: 'slider right', plateColor: 'plate green', text: 'ON' };
    }
    return { sliderPosition: 'slider', plateColor: 'plate', text: 'OFF' };
  }

  render() {
    const getClass = this.getSwitchClass();
    return (
    <div>
      <div className='switch-container'>
        <button className={getClass.plateColor} onClick={this.handleClick}></button>
        <button className={getClass.sliderPosition} onClick={this.handleClick}></button>
      </div>
      <p>{getClass.text}</p>
    </div>
    );
  }
}

export default Switch;
