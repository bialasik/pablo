import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';

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

  getContent() {
    if (this.section.files['01.default.md'] && this.section.files['01.default.html']) {
      return (
        <section>
          <ReactMarkdown source={ this.section.files['01.default.md'] } />
          <Frame>
            <div dangerouslySetInnerHTML={ { __html: this.section.files['01.default.html'] } }></div>
          </Frame>
          <Highlight>{ this.section.files['01.default.html'] }</Highlight>
        </section>
      );
    } else {
      return <h1>Nothing to see mate.</h1>;
    }
  }

  render() {
    this.section = this.getSection(this.props.routeParams.splat, __INITIAL_STATE__);

    return (
      <section>
        { this.getContent() }
      </section>
    );
  }
};
