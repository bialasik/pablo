import React from 'react';
import { Link } from 'react-router';

const build = (current, path) => {
  return (
    <div>
      <Link to={ `${path}/${current.name.toLowerCase()}` }>{ current.name }</Link>
      { current.directory && current.directory.length ? current.directory.map((child) => build(child, `${path}/${current.name.toLowerCase()}`)) : null }
    </div>
  );
};

export default (props) => {
  return (
    <nav>
      { props.data.directory.map((current) => build(current, '')) }
    </nav>
  );
};
