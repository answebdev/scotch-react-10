import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { SRLWrapper } from 'simple-react-lightbox';
import '../styles/TopicFive.css';
// import style1 from '../../img/style01.png';

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

class TopicFive extends Component {
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
    if (this.state.userinput.toLowerCase() === 'racecar') {
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
      border: '1px solid steeleblue',
      fontSize: '18px',
      textAlign: 'left',
      backgroundColor: '#ffffff',
      borderRadius: '5px',
    };

    const buttonStyle = {
      backgroundColor: 'steelblue',
      color: '#ffffff',
      font: 'inherit',
      fontSize: '20px',
      border: '2px solid steelblue',
      padding: '8px 25px',
      borderRadius: '5px',
    };

    return (
      <Container>
        <div>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            Topic 5: Setting Styles Dynamically with Styled Components
          </h3>

          <p>
            Useful resources:
            <ul>
              <li>
                Udemy Source &nbsp;| &nbsp;
                <a
                  href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/16851074#overview'
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
            {/* <h4
              className={`${
                this.state.userinput.length === 5 ? 'prize' : null
              }`}
            > */}
            <h4>Riddle</h4>
            <div style={{ marginBottom: '0' }}>
              <p>
                What 7 letter word is spelled the same way backwards and
                forwards?
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
            </div>
            <hr />
            <h4>Using the Ternary Operator</h4>
            <p>
              One way to set styles dynamically is to use the ternary operator.
              Let's say, for example...
            </p>
            <br />
            <br />
          </div>
        </div>
      </Container>
    );
  }
}

export default TopicFive;
