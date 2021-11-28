import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

test('renders home page without error', () => {
  const wrapper = shallow(<Home />);
  const homeComponent = wrapper.find("[data-test='home-component']");
  expect(homeComponent.length).toBe(1);
});
