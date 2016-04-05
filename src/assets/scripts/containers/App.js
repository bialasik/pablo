import React, { Component } from 'react';

import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import Navigation from './../components/Navigation';

const __INITIAL_STATE__ = window.__INITIAL_STATE__;
const THEME_URL_BASE = '/theme';

export default class App extends Component {
  setResources({ styles, scripts}) {
    // if (styles) document.getElementById('theme-styles').setAttribute('href', `${THEME_URL_BASE}/${styles}`);
    // if (scripts) document.getElementById('theme-script').setAttribute('src', `${THEME_URL_BASE}/${scripts}`);
    return this;
  }

  componentWillMount() {
    this.setResources(__INITIAL_STATE__.theme[0].assets);
  }

  render() {
    return (
      <div>
        <section className="sidebar">
          <Navbar themes={ __INITIAL_STATE__.theme } handler={ this.setResources.bind(this) } />
          <Navigation data={ __INITIAL_STATE__ } />
        </section>
        <main>
          { this.props.children }
          <Footer />
        </main>
      </div>
    );
  }
};
