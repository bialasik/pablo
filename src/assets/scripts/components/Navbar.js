import React from 'react';

export default (props) => {
  let toggle;

  if (props.themes.length > 1) {
    toggle = (
      <nav>
        { props.themes.map((theme) => {
          return (<button onClick={ (event) => props.handler(theme.assets) }>{ theme.name }</button>);
        }) }
      </nav>
    );
  }

  return (
    <header>
      <h1>Pablo</h1>
      { toggle }
      <hr />
    </header>
  );
};
