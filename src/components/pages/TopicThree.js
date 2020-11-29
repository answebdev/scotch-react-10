import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { SRLWrapper } from 'simple-react-lightbox';
import '../styles/TopicThree.css';
import style1 from '../../img/style01.png';
import style2 from '../../img/style02.png';
import style3 from '../../img/style03.png';
import style4 from '../../img/style04.png';
import style5 from '../../img/style05.png';
import style6 from '../../img/style06.png';
import style7 from '../../img/style07.png';
import style8 from '../../img/style08.png';
import style9 from '../../img/style09.png';
import input1 from '../../img/input01.png';
import input2 from '../../img/input02.png';
import input3 from '../../img/input03.png';
import input4 from '../../img/input04.png';
import input5 from '../../img/input05.png';
import meow from '../../audio/meow.mp3';
import wrong from '../../audio/wrong.mp3';

function yeah() {
  // Play Cat Audio
  // Source: https://coderrocketfuel.com/article/how-to-play-a-mp3-sound-file-in-react-js
  const audioEl = document.getElementsByClassName('audio-element')[0];
  audioEl.play();
  // End Audio Script
  Swal.fire({
    title: 'Congratulations! You got it!',
    width: 600,
    padding: '3em',
    background:
      '#fff url(https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backdrop: `
           rgba(0,0,123,0.4)
           url("https://thumbs.gfycat.com/ScaryMassiveGallowaycow-max-1mb.gif")
           left top
           no-repeat
         `,
  });
}

class TopicThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinput: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ userinput: event.target.value });
  }

  handleSubmit() {
    console.log('Your answer is: ' + this.state.userinput);
    if (
      this.state.userinput.toLowerCase() === 'future' ||
      this.state.userinput.toLowerCase() === 'the future'
    ) {
      yeah();
    } else {
      // Play Wrong Audio
      // Source: https://coderrocketfuel.com/article/how-to-play-a-mp3-sound-file-in-react-js
      // Note: Since this is the second time using this, we need to use [1]. If we use [0] like above, it will not work.
      const audioEl = document.getElementsByClassName('audio-element')[1];
      audioEl.play();
      // End Audio Script
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'error',
        title: 'Sorry. Try again',
      });
    }
  }

  render() {
    const handleEnterSubmit = (event) => {
      event.preventDefault();
      console.log('Answer submitted with ENTER.');
    };

    const inputStyle = {
      border: '2px solid blue',
      fontSize: '18px',
      textAlign: 'left',
      backgroundColor: '#ffffff',
    };

    const buttonStyle = {
      backgroundColor: 'orange',
      font: 'inherit',
      fontSize: '20px',
      border: '2px solid blue',
      padding: '8px 25px',
      cursor: 'pointer',
    };

    // Setting class names dynamically.
    // These class names ('blue' and 'prize') are already in a separate CSS file.
    // Create an empty array.
    // When a certain condition is met (this.state.userinput.length === 2),
    // then this wil push the particular class name into the array (in this case, 'blue').
    // When the second condition is met (this.state.userinput.length > 5),
    // then this will push the other class name into the array ('prize'), so that you now have two items in the array.

    // Down below in the paragraph, we assign it: <p className={classes.join(' ')}>
    // Give the <p> a className of 'classes' (the name of this array).
    // And since this is an array, we need to pass a string.
    // And to do this, we can simply call 'join' with an empty space in between (' ') when we assign it to 'classes'
    // (another way to do this would be do call 'join' here with our if statements, and then store it in a variable).
    // Now, the className will have these two names, so that essentially, it will be: className = 'blue prize', which is what we want.
    // The styles of these two classes should now be applied.
    const classes = [];
    if (this.state.userinput.length === 2) {
      classes.push('blue'); // classes = ['blue']
    }
    if (this.state.userinput.length > 5) {
      classes.push('prize'); // classes = ['blue', 'prize']
    }

    // const classes = [];
    // if (this.state.userinput === 'future') {
    //   classes.push('blue');
    // }
    // if (this.state.userinput === 'the future') {
    //   classes.push('prize');
    // }

    return (
      <Container>
        <div>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            Topic 2: Setting Styles Dynamically
          </h3>

          <p>
            Useful resources:
            <ul>
              <li>
                Udemy Source &nbsp;| &nbsp;
                <a
                  href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8094580#overview'
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
            {/* Setting styles dynamically using a ternary operator: */}
            <h4
              className={`${
                this.state.userinput.length === 5 ? 'prize' : null
              }`}
            >
              Riddle
            </h4>
            <div style={{ marginBottom: '0' }}>
              <p
                className={classes.join(' ')}
                style={{ marginBottom: '-10px' }}
              >
                What is always in front of you but can’t be seen?
              </p>
            </div>
            <div style={{ marginBottom: '0' }}>
              {/* Wrap everything in a form with Submit handler to be able to submit by pressin ENTER */}
              <form onSubmit={handleEnterSubmit}>
                <input
                  style={inputStyle}
                  placeholder='Your answer'
                  type='text'
                  onChange={this.updateInput}
                ></input>
                <button
                  style={buttonStyle}
                  type='submit'
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>

              {/* Audio Source: http://www.orangefreesounds.com/cat-meow-audio-clip/ */}
              <div>
                <audio className='audio-element'>
                  <source src={meow}></source>
                </audio>
              </div>
              {/* Audio Source: http://freesoundeffect.net/sound/bad-answer-01-sound-effect */}
              <div>
                <audio className='audio-element'>
                  <source src={wrong}></source>
                </audio>
              </div>
            </div>
            <hr />
            <h4>Using the Ternary Operator</h4>
            <p>
              One way to set styles dynamically is to use the ternary operator.
              Let's say, for example, that we want some styles to change
              whenever a user inputs a certain number of characters into the
              input field above. As you can see here, the ternary operator is
              used inside the <strong>h4</strong> (line 201). This operator
              states that if the "userinput" is equal to five characters, then
              the CSS class name of "prize" will be applied (note that we
              already have the <strong>state</strong> defined up above in our
              code). Otherwise, it will return "null" (i.e., it will not get any
              classes applied).
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
                    src={style1}
                    alt='Setting Styles Dynamically'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              These are the styles that we have in the "prize" class name, and
              which we have in a separate CSS file.
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
                    src={style2}
                    alt='Setting Styles Dynamically'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>As the user types in the input field, nothing happens.</p>
            <Row>
              <Col md={6}>
                <SRLWrapper>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    src={style3}
                    alt='Setting Styles Dynamically'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              But as soon as the user types in 5 characters (i.e. the length of
              the 'userinput' is equal to five), the <strong>h4</strong> changes
              color. So the ternary operator works.
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
                    src={style4}
                    alt='Setting Styles Dynamically'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
          </div>

          <h4>Setting Class Names Dynamically</h4>
          <p>
            Another way to set styles dynamically is to do it by dynamically
            setting class names. With this approach, we create an empty array.
            Here, we'll call it "classes" (line 108). Note that we do all this
            before the <strong>return</strong> (line 116). We then state our
            condition (lines 109-111), including the CSS class name that we want
            to push into the empty array (line 110). In this example, we have
            two separate if statements. The first one states that if the length
            of the "userinput" is equal to two (i.e. if the user inputs two
            characters), then the CSS class name of "blue" will be applied
            (notice that "blue" will be pushed into the "classes" array). The
            second if statement says that if the length of the "userinput" is
            greater than five (i.e. the user enters 6 or more characters), then
            the CSS class name of "prize" will be applied (and now after "prize"
            is pushed into the "classes" array, the "classes" array now contains
            both "blue" and "prize"). This is what the code looks like (lines
            108-114).
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
                  src={style5}
                  alt='Setting Styles Dynamically'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            And this is the CSS referred to in the code, which is in a separate
            CSS file.
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
                  src={style6}
                  alt='Setting Styles Dynamically'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            We now apply this to our element (line 248). And since this is an
            array, we need to pass a string. And to do this, we can simply call
            "join" with an empty space in between (' ') when we assign it to
            "classes" And now the class name will have these two names, so that
            essentially, it will be: <strong>className = 'blue prize', </strong>
            which is what we want. The styles of these two classes should now be
            applied.
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
                  src={style7}
                  alt='Setting Styles Dynamically'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            And so now when the user types in two characters (meeting the first
            condition), the CSS class name of "blue" is applied, and the text
            changes to blue. The next character inputted will change the text
            back to black, since the length of the user input will no longer
            equal to two.
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
                  src={style8}
                  alt='Setting Styles Dynamically'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            As for the second if statement, when the character length is greater
            than five, then the CSS class of "prize" will be applied. That means
            the text will change to the color "salmon" and get a bold weight of
            700. And as you can see, that's what we get, so this works.
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
                  src={style9}
                  alt='Setting Styles Dynamically'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <hr />
          <div>
            <h4>Mini Lesson: Submitting When Clicking Enter</h4>
            <p>
              Here is a simple input field with a submit button. It has an{' '}
              <strong>onClick</strong> event on the submit button.
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
                    src={input1}
                    alt='Basic Input Field'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              This is the <strong>handleSubmit</strong> function. This is what
              happens when the submit button is clicked.
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
                    src={input3}
                    alt='Basic Input Field'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              And this is what it looks like in the browser. At this point, a
              user can only submit an answer only when the submit button is
              clicked. However, you may want a user to also be able to submit an
              answer when ENTER is clicked.
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
                    src={input2}
                    alt='Basic Input Field'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              To add this functionality, simply wrap everything (i.e. the input
              and the button) in a form (lines 135, 150), and add an{' '}
              <strong>onSubmit</strong> event to the form.
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
                    src={input4}
                    alt='Basic Input Field'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <p>
              Next, write the function for the <strong>onSubmit</strong>. All
              you need to do is add an <strong>event.preventDefault()</strong>{' '}
              (line 68). In this example, we have a class-based component, so
              unlike the <strong>handleSubmit()</strong> (not seen in image),
              which goes <em>outside</em> of the <strong>render</strong> method
              (i.e. above this <strong>render</strong> method, but{' '}
              <em>after</em> the{' '}
              <strong>class PracticeThree extends Component</strong>), our{' '}
              <strong>handleEnterSubmit()</strong> goes <em>inside</em> the{' '}
              <strong>render</strong> method. And that's all you need to do. The
              user can now submit their answer using the ENTER key, as well as
              by clicking the submit button.
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
                    src={input5}
                    alt='Basic Input Field'
                  />
                </SRLWrapper>
              </Col>
            </Row>
            <br />
            <br />
          </div>
        </div>
      </Container>
    );
  }
}

export default TopicThree;
