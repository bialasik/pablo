import React from 'react';

export default (props) => {
  return (
    <nav>
      { props.data.directory.map((file) => <h1>{ file.name }</h1>) }
    </nav>
  );
};
