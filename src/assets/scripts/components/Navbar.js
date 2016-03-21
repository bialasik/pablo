import React from 'react';

export default (props) => {
  return (
    <header>
      <h1>Pablo</h1>
      <nav>
        { props.themes.map((theme) => <button onClick={ (event) => props.handler(theme.assets) }>{ theme.name }</button>) }
      </nav>
      <hr />
    </header>
  );
};
