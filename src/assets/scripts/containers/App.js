import React, { Component } from 'react';

import Navigation from './../components/navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
};
