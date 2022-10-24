import React from 'react';
import ReactDOM from 'react-dom';

const $container = document.querySelector('#root');

function CustomButton() {
  return <button>Click Me!</button>;
}

const root = ReactDOM.createRoot($container);
root.render(<CustomButton />);
