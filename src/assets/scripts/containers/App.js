import React, { Component } from 'react';

import Navigation from './../components/navigation';

export default class App extends Component {
  render() {
    return (
      <main>
        <Navigation />
        { this.props.children }
      </main>
    );
  }
};
