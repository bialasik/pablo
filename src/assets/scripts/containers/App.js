import React, { Component } from 'react';

import Navigation from './../components/Navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation data={ window.routes } />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
};
