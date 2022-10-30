import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pokemon = {
  bulbasaur: 'images/001.png',
  charmander: 'images/004.png',
  pikachu: 'images/007.png',
  squirtle: 'images/025.png',
  jigglypuff: 'images/039.png'
};

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel pokemon={pokemon}/>);
