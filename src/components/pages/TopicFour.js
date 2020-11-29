import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SRLWrapper } from 'simple-react-lightbox';
import button1 from '../../img/button01.png';
import button2 from '../../img/button02.png';
import button3 from '../../img/button03.png';
import button4 from '../../img/button04.png';
import button5 from '../../img/button05.png';
import button6 from '../../img/button06.png';
import button7 from '../../img/button07.png';
import button8 from '../../img/button08.png';
import styled from 'styled-components';
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

const StyledButton = styled.button`
  border: none;
  background-color: steelblue;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  @media screen and (min-width: 981px) and (max-width: 1200px) {
    background-color: black;
  }
`;

class TopicFour extends Component {
  render() {
    return (
      <Container>
        <div>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            Topic 4: Styled Components
          </h3>
          <p>
            Useful resources:
            <ul>
              <li>
                Styled Components &nbsp;| &nbsp;
                <a
                  href='https://styled-components.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>

              <li>
                Udemy Source &nbsp;| &nbsp;
                <a
                  href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/16851070#overview'
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
            <StyledButton>Styled Button</StyledButton>
          </div>
          <hr />

          <h4>Styled Components</h4>
          <p>
            Besides Radium, another popular third-party package that helps with
            styling React components is the&nbsp;
            <a
              className='click'
              href='https://styled-components.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Styled Components
            </a>
            &nbsp;library. This library makes styling components very simple. To
            get started, we first need to install it.
          </p>
          <p>
            <pre
              style={{
                borderRadius: '0.3em',
                position: 'relative',
                padding: '1em 0 1em 3em',
                fontSize: '18px',
                backgroundColor: '#272822',
                color: '#f8f8f2',
              }}
            >
              <code>{`npm install --save styled-components`}</code>
            </pre>
          </p>
          <br />
          <p>Then we need to import it up above in our code.</p>
          <p>
            <pre
              style={{
                borderRadius: '0.3em',
                position: 'relative',
                padding: '1em 0 1em 3em',
                fontSize: '18px',
                backgroundColor: '#272822',
                color: '#f8f8f2',
              }}
            >
              <code>{`import styled from 'styled-components'`}</code>
            </pre>
          </p>
          <br />
          <p>
            So let's say that we just have a regular button that we want to
            style.
          </p>
          <p>
            <pre>
              <code className='language-html'>
                {`<div>
  <button>Button</button>
</div>`}
              </code>
            </pre>
          </p>
          <br />
          <p>And it looks like this.</p>
          <Row>
            <Col md={6}>
              <SRLWrapper>
                <img
                  style={{
                    width: '50%',
                    height: 'auto',
                    cursor: 'pointer',
                  }}
                  src={button1}
                  alt='Unstyled Button'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            And so now let's go ahead and use Styled Components to style our
            button. So basically, instead of using our regular button element
            syntax, we would start by doing something like this.
          </p>
          <p>
            <pre
              style={{
                borderRadius: '0.3em',
                position: 'relative',
                padding: '1em 0 1em 3em',
                fontSize: '18px',
                backgroundColor: '#272822',
                color: '#f8f8f2',
              }}
            >
              <code>{`styled.button`}</code>
            </pre>
          </p>
          <br />
          <p>
            In the end, what this here is (styled.button) is a function call. So
            here, <strong>button</strong> is a method on the{' '}
            <strong>styled</strong> object. And instead of having parentheses
            with function arguments as we would normally have, we instead have
            two back ticks between which we can pass text. And then this text,
            in the end, is then passed into this button method in a special way.
            And this button method uses whatever you pass as styling for this
            button, which this method creates.
          </p>
          <p>
            So in order to use Styled Components then, instead of having our
            regular button element, let's instead use{' '}
            <strong>styled.button</strong> (or whatever HTML element we want to
            style, e.g. <strong>styled.div, styled.a, styled.p,</strong> etc.).
            And then we use the two back ticks (this unusual back tick syntax is
            a new JavaScript feature called a&nbsp;
            <a
              className='click'
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates'
              rel='noopener noreferrer'
              target='_blank'
            >
              tagged template literal
            </a>
            ). And inside these two back ticks is where our styles go. And when
            adding the styles, we use regular CSS notation (no camel-case or
            quotes), but without using any selectors (i.e. class names or IDs),
            just the properties and their values.
          </p>
          <p>
            And then what we need to do, is to then use this code and create a
            new component. And we'll call it <strong>StyledButton.</strong> And
            this is where we create our styled button, with the template tag
            syntax. Notice that we our doing this <em>outside</em> of our{' '}
            <strong>class TopicFour extends Component,</strong> since we are
            using a class-based component here. It's important to note that we
            are starting with an uppercase ("StyledButton") character, because
            we plan on using this component right in this file.
          </p>
          <Row>
            <Col md={6}>
              <SRLWrapper>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    cursor: 'pointer',
                  }}
                  src={button2}
                  alt='Styled Button Component'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            And we can now use our button as a regular React component (line
            120).
          </p>
          <Row>
            <Col md={6}>
              <SRLWrapper>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    cursor: 'pointer',
                  }}
                  src={button8}
                  alt='Styled Button Component'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>And we now have our styled button.</p>
          <p>
            <Row>
              <Col md={6}>
                <SRLWrapper>
                  <img
                    style={{
                      width: '50%',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    src={button3}
                    alt='Styled Button Component'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              And we can also add media queries (lines 69-71). Again, without
              using any selectors.
            </p>
            <Row>
              <Col md={6}>
                <SRLWrapper>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    src={button4}
                    alt='Styled Button Component'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              And as you can see, when the screen size is reduced, the
              background color of the button changes to black.
            </p>
            <Row>
              <Col md={6}>
                <SRLWrapper>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    src={button5}
                    alt='Styled Button Component with Media Queries'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              And for pseudo selectors like <strong>:hover,</strong> we add an
              ampersand (&) symbol in front of it, and this will tell the Styled
              Components package that it belongs to our element (i.e. button).
              And so it should apply the hover style to it. So let's for
              example, add a box shadow on <strong>:hover</strong> (lines
              72-75).
            </p>
            <Row>
              <Col md={6}>
                <SRLWrapper>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    src={button6}
                    alt='Styled Button Component with Hover'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              And as you can see, we now get a box shadow when we hover over the
              button.
            </p>
            <Row>
              <Col md={6}>
                <SRLWrapper>
                  <img
                    style={{
                      width: '50%',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    src={button7}
                    alt='Styled Button Component with Box Shadow on Hover'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              And that's how we use the Styled Components library. And of
              course, you can also create and store styled components as their
              own components in their own separate files, and then reuse them
              across multiple files as you would do with regular components.
            </p>
          </p>
          <br />
          <br />
        </div>
      </Container>
    );
  }
}

export default TopicFour;
