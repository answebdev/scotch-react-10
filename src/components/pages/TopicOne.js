import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import input from '../../img/input.gif';
// import inputVid from '../../img/input.mp4';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

Prism.highlightAll();

// Prism Line Number Plugin
// Source: https://davidwalsh.name/prism-line-number-plugin
/*
	This plugins was created based on the Prism line-numbering plugin.
	This plugin aims to number all lines and is independent of highlighting.
*/
(function () {
  if (!window.Prism || !document.querySelectorAll) {
    return;
  }

  function $$(expr, con) {
    return Array.prototype.slice.call((con || document).querySelectorAll(expr));
  }

  function numberLines(pre) {
    var offset = +pre.getAttribute('data-line-offset') || 0;
    var lineHeight = parseFloat(getComputedStyle(pre).lineHeight);
    var code = pre.querySelector('code');
    var numLines = code.innerHTML.split('\n').length;
    pre.setAttribute('data-number', '');

    for (var i = 1; i <= numLines; i++) {
      var line = document.createElement('div');
      line.className = 'line-number';
      line.setAttribute('data-start', i);
      line.style.top = (i - offset - 1) * lineHeight + 'px';

      (code || pre).appendChild(line);
    }
  }

  Prism.hooks.add('after-highlight', function (env) {
    var pre = env.element.parentNode;

    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    $$('.line-number', pre).forEach(function (line) {
      line.parentNode.removeChild(line);
    });

    numberLines(pre);
  });
})();

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
          <br />
          <p>
            So what we have here is a basic input with some simple inline
            styles. When a user types inside the input field, the same text will
            appear below as the user types.
          </p>
          <p>
            <pre>
              <code className='language-javascript'>
                {`<input
  style={style1}
  type='text'
  placeholder='Add text...'
/>`}
              </code>
            </pre>
          </p>
          <br />
          <p>
            So up above, inside our component, let's add our state (lines 2-4),
            where <strong>userInput</strong> is set to an empty string, since we
            do not have anything in state in the beginning.
          </p>
          <p>
            <pre>
              <code className='language-javascript'>
                {`class TopicOne extends Component {
  state = {
    userInput: '',
  };

  render() {
    return (
      <Container>`}
              </code>
            </pre>
          </p>
          <br />
          <p>
            We then add an <strong>onChange</strong> to the input, so that we
            can handle the event when a user types into the input field (line
            5). And we want the value of what the user types to be the{' '}
            <strong>userInput</strong> (line 6). As we saw above, this starts as
            an empty string, but the value will change to whatever the user
            types in.
          </p>
          <p>
            <pre>
              <code className='language-html'>
                {`<input
  style={style1}
  type='text'
  placeholder='Add text...'
  onChange={this.inputHandler}
  value={this.state.userInput}
/>`}
              </code>
            </pre>
          </p>
          <br />
          <p>
            And now we need to create our <strong>inputHandler,</strong> which
            we'll add up above after our state (lines 5-7). Note that because we
            have a class-based component here, we are able to use{' '}
            <strong>setState()</strong> (as opposed to if we had a functional
            component, in which case we would not be able to use{' '}
            <strong>setState()</strong>).
          </p>
          <p>
            <pre>
              <code className='language-javascript'>
                {`state = {
    userInput: '',
  };

  inputHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <Container>`}
              </code>
            </pre>
          </p>
          <br />
          <p>
            Finally, let's add a paragraph to render whatever the user types, so
            that we can see it in the browser as the user is typing. And we'll
            just add this after our input (line 10). Notice that inside the
            curly braces, we have our state,{' '}
            <strong>this.state.userInput</strong>, which refers to whatever the
            user types into the input field (line 8). And that's it.
          </p>
          <p>
            <pre>
              <code className='language-html'>
                {`<div>
  <p>Enter some text. The text will appear below as you type.</p>
  <input
    style={style1}
    type='text'
    placeholder='Add text...'
    onChange={this.inputHandler}
    value={this.state.userInput}
  />
  <p style={style2}>{this.state.userInput}</p>
</div>`}
              </code>
            </pre>
          </p>
          <br />
          <p>And this is what it looks like in action.</p>
          <div>
            <img
              style={{ marginBottom: '40px' }}
              src={input}
              alt='Input Field'
            />
          </div>
          {/* <div style={{ marginBottom: '40px' }}>
            <video autoPlay muted loop width='750' height='500' controls>
              <source src={inputVid} type='video/mp4' />
            </video>
          </div> */}
        </div>
      </Container>
    );
  }
}

export default TopicOne;
