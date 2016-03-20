import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';
import Navbar from '../../src/assets/js/components/Navbar';
import { expect } from 'chai';

describe('Navbar', () => {
	let component;
	
	beforeEach(() => {
		component = renderIntoDocument(<Navbar items={[{id: 0, text: 'Home', url: '/home'}, {id: 1, text: 'About', url: '/about'}]} />);
	});
	
	it('renders a navigation structure', () => { 
		const nav = scryRenderedDOMComponentsWithTag(component, 'nav');		
		expect(nav.length).to.equal(1);
	});
	
	it('creates anchors with the correct text and url', () => {
		const navItems = scryRenderedDOMComponentsWithTag(component, 'a');
		expect(navItems.length).to.equal(2);
		expect(navItems[1].textContent).to.equal('About');
		expect(navItems[1].getAttribute('href')).to.equal('/about');
	});
});