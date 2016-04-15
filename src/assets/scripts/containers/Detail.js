import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';

import Frame from './../components/Frame';

const __INITIAL_STATE__ = window.__INITIAL_STATE__;

export default class Detail extends Component {
  getSection(params, data) {
    return params.split('/').reduce((prev, curr) => {
      const currDir = prev.children.filter((dir) => {
          return dir.title.toLowerCase() === curr.toLowerCase();
      }).pop();
      return Object.assign({}, currDir);
    }, data);
  }

  getContent() {
    return this.section.content.map((files) => {
      return files.map((file) => {
        if (file.type === 'md') {
          return (
            <section>
              <ReactMarkdown source={ file.body } />
            </section>
          );
        }

        if (file.type === 'css') {
          return (
            <section>
              <Highlight>{ file.body }</Highlight>
            </section>
          );
        }

        if (file.type === 'html') {
          return (
            <section>
              <Frame styles={ this.props.theme.styles }>
                <div dangerouslySetInnerHTML={ { __html: file.body } }></div>
              </Frame>
              <Highlight>{ file.body }</Highlight>
            </section>
          );
        }
      });
    })
  }

  render() {
    this.section = this.getSection(this.props.routeParams.splat, { children: __INITIAL_STATE__.content });

    return (
      <section>
        { this.getContent() }
      </section>
    );
  }
};
