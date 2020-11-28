import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import Person from './Person';

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
    if (this.state.userinput.toLowerCase() === 'future' || 'the future') {
      alert('Yeah!');
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
    //Send state to the server code
  }

  render() {
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
            <input
              style={inputStyle}
              placeholder='Your answer'
              type='text'
              onChange={this.updateInput}
            ></input>
            {/* <input
              style={style}
              type='submit'
              onClick={this.handleSubmit}
            ></input> */}
            <button
              style={buttonStyle}
              type='submit'
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default PracticeThree;
