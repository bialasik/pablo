import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
	render() {
		return (
			<nav>
				{window.routes.directory.map(dir =>
					<Link to={dir.name.toLowerCase()}>{dir.name}</Link>
				)}
			</nav>
		);
	}
}