import React from 'react';
import { shallow } from 'enzyme';
import ModalGallery, { ModalSwitch } from './ModalGallery';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';

let pathMap = {};
describe('routes using array of routers', () => {
	beforeAll(() => {
		const component = shallow(<ModalSwitch />);
		pathMap = component.find(Route).reduce((pathMap, route) => {
			const routeProps = route.props();
			pathMap[routeProps.path] = routeProps.component;
			return pathMap;
		}, {});
		console.log(pathMap)
	})
	it('should show Home component for / router (getting array of routes)', () => {
		expect(pathMap['/']).toBe(Home);
	})
	it('should show Page component for /page router', () => {
		expect(pathMap['/page/:id']).toBe(Page);
	})
})