import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { SRLWrapper } from 'simple-react-lightbox';
import input1 from '../../img/input01.png';
import input2 from '../../img/input02.png';
import input3 from '../../img/input03.png';
import input4 from '../../img/input04.png';
import input5 from '../../img/input05.png';

function yeah() {
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

class PracticeThree extends Component {
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
    if (this.state.userinput.toLowerCase() === 'future') {
      yeah();
    } else if (this.state.userinput.toLowerCase() === 'the future') {
      yeah();
    } else {
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
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <Container>
        <div>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            Practice 3: Setting Styles Dynamically
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
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div>
          <h4>Riddle</h4>
          <div style={{ marginBottom: '0' }}>
            <p style={{ marginBottom: '-10px' }}>
              What is always in front of you but can’t be seen?
            </p>
          </div>
          <div style={{ marginBottom: '40px' }}>
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
          </div>
          <div>
            <h4>Mini Lesson</h4>
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
              you need to do is add an <strong>event.preventDefault().</strong>{' '}
              In this example, we have a class-based component, so unlike the{' '}
              <strong>handleSubmit()</strong>, which goes <em>outside</em> of
              the <strong>render</strong> method (so above this{' '}
              <strong>render</strong> method, but <em>after</em> the{' '}
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

export default PracticeThree;
