import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { SRLWrapper } from 'simple-react-lightbox';
import error from '../../img/error.png';
// We also need to export Radium down below in the 'export default' (see below).
import Radium from 'radium';
import '../styles/PracticeTwo.css';

const style1 = {
  fontSize: '20px',
  textAlign: 'left',
  backgroundColor: '#ffffff',
  border: '1px solid black',
  borderRadius: '5px',
  color: 'black',
  padding: '5px 25px',
  margin: '10px 20px 80px 0',
};

const style1hover = {
  fontSize: '20px',
  textAlign: 'left',
  backgroundColor: '#ffffff',
  border: '1px solid black',
  borderRadius: '5px',
  color: 'black',
  padding: '5px 25px',
  margin: '10px 20px 80px 0',
  // Using Radium to add 'hover' (all pseudo selectors are supported) - note the syntax:
  ':hover': {
    backgroundColor: 'steelblue',
    color: 'white',
  },
};

const style2hover = {
  fontSize: '20px',
  textAlign: 'left',
  backgroundColor: '#ffffff',
  border: '1px solid black',
  borderRadius: '5px',
  color: 'black',
  padding: '5px 25px',
  margin: '10px 20px 80px 0',
  // Using Radium to add 'hover' (all pseudo selectors are supported) - note the syntax:
  ':hover': {
    backgroundColor: 'orange',
    color: 'white',
  },
};

class PracticeTwo extends Component {
  clickHandler1 = () => {
    Swal.fire({
      title: "Thank you for clicking. Isn't this nice?",
      width: 600,
      padding: '3em',
      background:
        '#fff url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
      backdrop: `
          rgba(0,0,123,0.4)
          url("https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
          left top
          no-repeat
        `,
    });
  };

  clickHandler2 = () => {
    const ipAPI = '//api.ipify.org?format=json';
    Swal.queue([
      {
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text: 'Your public IP will be received ' + 'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return fetch(ipAPI)
            .then((response) => response.json())
            .then((data) => Swal.insertQueueStep(data.ip))
            .catch(() => {
              Swal.insertQueueStep({
                icon: 'error',
                title: 'Unable to get your public IP',
              });
            });
        },
      },
    ]);
  };

  clickHandler3 = () => {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  render() {
    return (
      <Container>
        <div>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            Practice 2: Managing Inline Styles
          </h3>
          <p>
            When using inline styles in React, you are not able to add
            pseudo-classes like <strong>:hover</strong> (or use media queries).
            And if you were to create a separate CSS file and add a pseudo-class
            to a button in this component, for example, then this style will not
            be scoped to only this component, but be applied globally to all
            buttons, even though that is not what we want. So how can we get
            around this? Of course, we could get around this by adding unique
            IDs and classes, but there are times when we need to use inline
            styling, for example, when we want to set our styles dynamically in
            our component using JavaScript. So we need a way to be able to use
            pseudo-classes (and media queries) using inline styles in the same
            component.
          </p>
          <p>
            By default, this is not possible, but we can add a third-party
            package called{' '}
            <a
              href='https://www.npmjs.com/package/radium'
              rel='noopener noreferrer'
              target='_blank'
            >
              Radium
            </a>{' '}
            to add this functionality to our apllication. Radium allows us to
            use inline styles with pseudo selectors and media queries.
          </p>
          <p>
            After installing and using Radium, you may get an error saying that
            Radium requires each element with interactive styles to have a
            unique key (click on image):
          </p>

          {/* Note: To use lightbox, you need to also import it in App.js and wrap your app with the lightbox component (see App.js) */}
          <Row>
            <Col md={6}>
              <SRLWrapper>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    cursor: 'pointer',
                  }}
                  src={error}
                  alt='Error'
                />
              </SRLWrapper>
              {/* <Image
                src={error}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                fluid
              /> */}
            </Col>
          </Row>
          <p>
            For information about how to use keys, take a look at this article{' '}
            <a
              href='https://dev.to/ari_o/react-how-to-use-pseudo-selectors-with-radium-4gm5'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
          </p>
          <p>
            Useful resources:
            <ul>
              <li>
                React - How to use pseudo-selectors with Radium &nbsp;| &nbsp;
                <a
                  href='https://dev.to/ari_o/react-how-to-use-pseudo-selectors-with-radium-4gm5'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Original Source &nbsp;| &nbsp;
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
            <p>
              Check out these SweetAlerts from{' '}
              <a
                href='https://sweetalert2.github.io/'
                rel='noopener noreferrer'
                target='_blank'
              >
                SweetAlert2
              </a>
              .
            </p>
            <button style={style1} onClick={this.clickHandler1}>
              Click 1
            </button>

            <button
              input
              key={0}
              style={style1hover}
              onClick={this.clickHandler2}
            >
              Click 2
            </button>

            <button
              input
              key={1}
              style={style2hover}
              onClick={this.clickHandler3}
            >
              Click 3
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

// This is called a higher order component.
// Here, the Radium component is wrapping our 'PracticeTwo' component, adding or injecting, some extra functionality,
// in this case, some extra syntax which will parse our styles and understand some extra features that we can now use.
// We can do this with both class-based components and functional components.
export default Radium(PracticeTwo);
