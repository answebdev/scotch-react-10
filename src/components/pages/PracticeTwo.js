import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { SRLWrapper } from 'simple-react-lightbox';
import error1 from '../../img/error1.png';
import error2 from '../../img/error2.png';
import mediaQuery from '../../img/media-query.png';
import styleRoot from '../../img/style-root.png';

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

// To use Radium for transforming selectors, like media queries or key frames,
// we need to wrap the entire application in a special component provided by Radium,
// and we do this in App.js (see App.js), by importing 'StyleRoot' from Radium:
// import Radium, { StyleRoot } from 'radium'
// Then down below in App.js, we wrap our whole application with <StyleRoot> in the 'return' statement.
const queryStyle = {
  fontSize: '20px',
  textAlign: 'left',
  backgroundColor: '#ffffff',
  border: '1px solid black',
  borderRadius: '5px',
  color: 'black',
  padding: '5px 25px',
  margin: '10px 20px 80px 0',
  '@media screen and (min-width: 981px) and (max-width: 1200px)': {
    backgroundColor: 'red',
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

  // Image: https://www.pexels.com/photo/sorae-ecology-park-in-korea-3405489/
  clickHandler4 = () => {
    Swal.fire({
      title: 'Brown and Red Wind Mill',
      text: 'South Korea',
      imageUrl:
        'https://images.pexels.com/photos/3405489/pexels-photo-3405489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Brown and Red Wind Mill in South Korea',
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
                Simple React Light-Box &nbsp;| &nbsp;
                <a
                  href='https://simple-react-lightbox.dev/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Simple React Light-Box (Medium Article)&nbsp;| &nbsp;
                <a
                  href='https://medium.com/@michelecocuccio/simple-react-light-box-28063402101a'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
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
                  src={error1}
                  alt='Error'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
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
            To use Radium for transforming selectors, like media queries or key
            frames, we simply create a <strong>constant</strong> for our
            selector, in this case, for our media query, just like we did for
            our pseudo selector. We then add this <strong>constant</strong> to
            the style property of the element we want to give the media query
            to. At this point, you will see this error, telling us to wrap our
            application in the StyleRoot component (click on image).
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
                  src={error2}
                  alt='Error'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            To use Radium for transforming selectors, like media queries or key
            frames, the entire application needs to be wrapped in a special
            component provided by Radium. This is done in{' '}
            <strong>App.js</strong> by importing 'StyleRoot' from Radium. Then
            down in the <strong>return</strong> statement, the entire
            application is wrapped with the 'StyleRoot' component. Once this is
            done, the error disappears and our media queries should now work.
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
                  src={styleRoot}
                  alt='Using Radium for Media Queries'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />
          <p>
            In our example, we added a media query so that the background color
            of the "Click 1" button turns red when the screen size is reduced.
            As you can see, the button indeed turns red when the screen size is
            reduced, so we know that our media query is now working (click on
            image).
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
                  src={mediaQuery}
                  alt='Media Query Example'
                />
              </SRLWrapper>
            </Col>
          </Row>
          <br />

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

            <button style={queryStyle} onClick={this.clickHandler1}>
              Click 1
            </button>

            <button style={style1} onClick={this.clickHandler2}>
              Click 2
            </button>

            <button
              input
              key={0}
              style={style1hover}
              onClick={this.clickHandler3}
            >
              Click 3
            </button>

            <button
              input
              key={1}
              style={style2hover}
              onClick={this.clickHandler4}
            >
              Click 4
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
