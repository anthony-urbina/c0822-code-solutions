import React, { useState } from 'react';

// class HotButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clickCounter: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     let i = this.state.clickCounter;
//     i++;
//     this.setState({ clickCounter: i });
//   }

//   render() {
//     let color;
//     const clickCounter = this.state.clickCounter;
//     if (clickCounter >= 3 && clickCounter < 6) {
//       color = 'dark-purple';
//     } else if (clickCounter >= 6 && clickCounter < 9) {
//       color = 'light-purple';
//     } else if (clickCounter >= 9 && clickCounter < 12) {
//       color = 'red';
//     } else if (clickCounter >= 12 && clickCounter < 15) {
//       color = 'orange';
//     } else if (clickCounter >= 15 && clickCounter < 18) {
//       color = 'yellow';
//     } else if (clickCounter >= 18) {
//       color = 'white';
//     } else {
//       color = 'stock';
//     }

//     return <button className={color} onClick={this.handleClick}>Hot Button</button>;
//   }
// }

function HotButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  let color;
  if (count >= 3 && count < 6) {
    color = 'dark-purple';
  } else if (count >= 6 && count < 9) {
    color = 'light-purple';
  } else if (count >= 9 && count < 12) {
    color = 'red';
  } else if (count >= 12 && count < 15) {
    color = 'orange';
  } else if (count >= 15 && count < 18) {
    color = 'yellow';
  } else if (count >= 18) {
    color = 'white';
  } else {
    color = 'stock';
  }

  return <button className={color} onClick={handleClick}>Hot Button</button>;
}

export default HotButton;
