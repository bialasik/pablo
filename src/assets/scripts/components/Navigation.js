import React from 'react';
import { Link } from 'react-router';

const build = (current, path) => {
  return (
    <div>
      <Link to={ `${path}/${current.title.toLowerCase()}` }>{ current.title }</Link>
      { current.children.map((child) => build(child, `${path}/${current.title.toLowerCase()}`)) }
    </div>
  );
};

export default (props) => {
  return (
    <nav>
      { props.data.content.map((current) => build(current, '')) }
    </nav>
  );
};
