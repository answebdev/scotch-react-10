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

class TopicOne extends Component {
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
            Topic 1: Input Field
          </h3>
          <p>
            Since we are using state here, as well as{' '}
            <strong>setState()</strong>, we must use a class-based component,
            and not a functional component.
          </p>
          <p>
            Useful resources:
            <ul>
              <li>
                Conditional Rendering &nbsp;| &nbsp;
                <a
                  href='https://reactjs.org/docs/conditional-rendering.html'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Lists & Keys &nbsp;| &nbsp;
                <a
                  href='https://reactjs.org/docs/lists-and-keys.html'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Original Source &nbsp;| &nbsp;
                <a
                  href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/practice/16066/introduction#overview'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
            </ul>
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

export default TopicOne;
