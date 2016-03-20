import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

const nav = [{id: 0, text: 'Home', url: '/home'}, {id: 1, text: 'Base', url: '/base'}, {id: 2, text: 'Components', url: '/components'}]

ReactDOM.render(
  <Navbar items={nav} />,
  document.getElementById('app')
);