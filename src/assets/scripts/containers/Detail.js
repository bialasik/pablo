import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const __INITIAL_STATE__ = window.__INITIAL_STATE__;

export default class Detail extends Component {
  getSection(params, data) {
    return params.split('/').map((param) => {
      return data.directory.filter((current) => {
        return current.name.toLowerCase() === param;
      });
    });
  }

  componentWillMount() {
    this.section = this.getSection(this.props.routeParams.splat, __INITIAL_STATE__);
  }

  render() {
    const example = '## Dropdown\n\nDropdown example';

    return (
      <div>
        <ReactMarkdown source={ example } />
        { this.props.children }
      </div>
    );
  }
};
