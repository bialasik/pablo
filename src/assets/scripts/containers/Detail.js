import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Frame from './../components/Frame';

const __INITIAL_STATE__ = window.__INITIAL_STATE__;

export default class Detail extends Component {
  getSection(params, data) {
    return params.split('/').reduce((prev, curr) => {
      const currentDirectory = prev.directory.filter((directory) => {
        return directory.name.toLowerCase() === curr.toLowerCase();
      }).pop();

      return Object.assign({}, currentDirectory);
    }, data);
  }

  render() {
    this.section = this.getSection(this.props.routeParams.splat, __INITIAL_STATE__);

    return (
      <Frame>
        {this.section.files['01.default.html'] ? <ReactMarkdown source={ this.section.files['01.default.html'] } /> : <h1>Nothing to see mate.</h1>}
      </Frame>
    );
  }
};
