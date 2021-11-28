import React from 'react';
import { add, total } from './App';
import App from './App';
import Notes from './components/pages/Notes';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders notes page without error', () => {
  const wrapper = shallow(<Notes />);
  const appComponent = wrapper.find("[data-test='notes-component']");
  expect(appComponent.length).toBe(1);
});

// Unit Test - it only tests one thing (this only tests the 'add' function)
// You are testing only one unit of code.
// Source: https://www.youtube.com/watch?v=QzznzOlkgGw
test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

// Integration Test - testing one function that relies on another function, and how that all works together.
// Here, we're not just testing the functionality of 'total'. We're also testing the functionality of 'add'.
// If you look at our 'test' function in App.js, 'total' uses the 'add' function - it relies on the 'add' function to work correctly).
// This is what makes this an Integration Test.
// In a React integration test, you would be testing a component that renders another component.
// Source: https://www.youtube.com/watch?v=52-QICDljww
// Let's say we have a TOTAL and a SUBTOTAL, and we want to add them together to be that FINAL PRICE.
test('total', () => {
  expect(total(5, 20)).toBe('$25');
});

// Mock Functions (fake functions) - a mock function is a fake function that gives you a result.
// Source: https://www.youtube.com/watch?v=2d-SX8YRyis
// How to mock a function --> use jest.fn() to create a fake function.
// We'll be testing a 'subtract' function.
// However, we're not going to have access to such a function here.
// i.e. we will not be importing it up above.

// Instead, we'll create a new variable 'subtract'
// This will be equal to jest.fn(), an empty function.
// The reason we're testing an empty function is so that we can test a function
// when we don't have access to that function (as is the case here with 'subract', which we don't have access to).
// So here, we're mocking a function

// const subtract = jest.fn(() => 3);
// expect(subtract).toHaveBeenCalledTimes(1);
