import React from 'react';
import ReactDOM from 'react-dom/client';

const $container = document.querySelector('#root');

const element = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);

console.log(element);

const root = ReactDOM.createRoot($container);
root.render(element);
