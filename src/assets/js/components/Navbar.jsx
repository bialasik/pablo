import React, { PropTypes } from 'react';

const propTypes = {
	items: PropTypes.array.isRequired
};

class Navbar extends React.Component {
	render() {
		return (
				<header>
					<h1>This is a title</h1>
					<nav>
						{this.props.items.map(item =>
							<a key={item.id} href={item.url}>{item.text}</a> 
						)}
					</nav>
				</header>
			);
	}
}

Navbar.propTypes = propTypes;

export default Navbar;