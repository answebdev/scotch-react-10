import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const style1 = {
  fontSize: '14px',
  textAlign: 'left',
  backgroundColor: '#ffffff',
  border: '1px solid black',
  borderRadius: '5px',
};

const style2 = {
  fontSize: '24px',
};

class PracticeOne extends Component {
  state = {
    userInput: '',
  };

  inputHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <Container>
        <div>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            Practice 1: Input Field
          </h3>
          <p>
            Since we are using state here, as well as{' '}
            <strong>setState()</strong>, we must use a class-based component,
            and not a functional component.
          </p>
          <hr />
          <div>
            <p>Enter some text. The text will appear below as you type.</p>
            <input
              style={style1}
              type='text'
              placeholder='Add text...'
              onChange={this.inputHandler}
              value={this.state.userInput}
            />
            <p style={style2}>{this.state.userInput}</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default PracticeOne;
