import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pokemon = [
  { name: 'bulbasaur', src: 'images/001.png' },
  { name: 'charmander', src: 'images/004.png' },
  { name: 'squirtle', src: 'images/007.png' },
  { name: 'pikachu', src: 'images/025.png' },
  { name: 'jigglypuff', src: 'images/039.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel pokemon={pokemon}/>);
