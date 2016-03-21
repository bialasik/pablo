import React, { Component } from 'react';

export default class Detail extends Component {
  getSection(params, data) {
    return params.split('/').map((param) => {
      return data.directory.filter((current) => {
        return current.name.toLowerCase() === param;
      });
    });
  }

  componentWillMount() {
    this.section = this.getSection(this.props.routeParams.splat, window.routes);
  }

  render() {
    console.log(this);
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
};
