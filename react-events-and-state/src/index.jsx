import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    } else if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    }
  }

  render() {
    const isClicked = this.state.isClicked;
    let text;
    if (!isClicked) {
      text = 'Click Me!';
    } else {
      text = 'Thanks!';
    }
    return <button onClick={this.handleClick}>{text}</button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton/>);
