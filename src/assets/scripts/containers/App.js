import React, { Component } from 'react';

import Navbar from './../components/Navbar';
import Navigation from './../components/Navigation';

export default class App extends Component {
  setStylesheetHref(url) {
    document.getElementById('theme').setAttribute('href', `/theme/${url}`);
    return this;
  }

  setJavascriptHref(url) {
    return this;
  }

  setTheme(assets) {
    this.setStylesheetHref(assets.styles);
    this.setJavascriptHref(assets.scripts);
    return this;
  }

  componentWillMount() {
    this.setTheme(window.routes.theme[0].assets);
  }

  render() {
    return (
      <div>
        <Navbar themes={ window.routes.theme } handler={ this.setTheme.bind(this) } />
        <Navigation data={ window.routes } />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
};
