import React from 'react';
import TopicSix from './TopicSix';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

const setup = (secretWord = 'party') => {
  return <TopicSix secretWord={secretWord} />;
};

test('renders topic six component without error', () => {
  const wrapper = shallow(<TopicSix />);
  const sixComponent = wrapper.find("[data-test='component-input']");
  expect(sixComponent.length).toBe(1);
});

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    // Create a function that we can watch for setCurrentGuess.
    // The 'jest.fn()' function sets it up so that this is a mock that it will be watching.
    // And we don't care what this function returns.
    // What we do care about is that 'useState' returns an array with 'mockSetCurrentGuess' as the second item.
    const mockSetCurrentGuess = jest.fn();
    // REPLACE what 'React.useState' was before with another mock.
    // And this one, we're actually going to give a function that has a return value.
    // So here, we're going to return for the current guess an empty string for now.
    // And for setCurrentGuess,, we're going to return our mock ('mockSetCurrentGuess').

    // So now in input (TopicSix.js), when it goes to run 'React.useState',
    // it won't run the actual useState that comes from React.
    // Instead, it will have been replaced with this function ( jest.fn() ),
    // And this function returns 2 items: an empty string and 'mockSetCurrentGuess'.
    // So in our component, the 'currentGuess' (line 8) is going to turn out to be this first empty string,
    // and 'setCurrentGuess' (line 8) is going to is going to be 'mockSetCurrentGuess'.

    // So that's how it works when we use s REPLACEMENT function.
    // we're taking this return value and forcing 'currentGuess' to, in this case, be an empty string.
    // and 'setCurrentGuess' to be a mock that we're going to watch.
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    // Find the input box.
    const inputBox = findByTestAttr(wrapper, 'input-box');

    // Simulate a change to the input box.
    // In order to simulate input into the input box,
    // we need to make a mock event, and then apply that as the 'change' event to the input box.
    const mockEvent = { target: { value: 'train' } };
    // Apply that event to a change simulation on our input box.
    // The effect of this and the previous line is simulating the input box getting a value of train.
    inputBox.simulate('change', mockEvent);

    // Run the mockSetCurrentGuess with the value of the input box.
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  test('field is cleared upon submit button click', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    // Our test will fail because we're using 'preventDefault()' in our button onClick event.
    // To fix this, we add an event to our 'click'.
    // And this event is just going to be an object with one property: 'preventDefault()',
    // which is just going to be a function that does nothing: '{}'.
    submitButton.simulate('click', { preventDefault() {} });
    // Expect that 'setCurrentGuess' had been called with an empty string when the submit button is clicked,
    // because this is what is going to clear the field.
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
