import React from 'react';

export default (props) => {
  let toggle;

  if (props.themes.length > 1) {
    toggle = (
      <nav className="button-list">
        { props.themes.map((theme) => {
          return (<button className="button-list__item" onClick={ (event) => props.handler(theme.assets) }>{ theme.name }</button>);
        }) }
      </nav>
    );
  }

  return (
    <header>
      { toggle }
    </header>
  );
};
