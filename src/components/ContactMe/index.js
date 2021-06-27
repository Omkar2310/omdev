import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"

import "./styles.contact.css"
const ContactMe = () => {
  return (
    <div id="contact">
      <Fade left>
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      </Fade>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Slide right>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="mailto:mankar.omkar2310@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline-danger"
                    title="mankar.omkar2310@gmail.com"
                  >
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a
                  href="https://www.linkedin.com/in/omkarmankar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a
                  href="https://github.com/omkar2310"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.youtube.com/channel/UCjggCbCaTp09SgbtILjw77A/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    id="youtube-btn"
                    variant="outline-info"
                    title="Lets code together!"
                  >
                    <i className="fab fa-youtube"></i> Youtube
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://twitter.com/OmkarMankar14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.facebook.com/omkar.mankar2310"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
            </Col>
          </Slide>
        </Row>
      </Jumbotron>
    </div>
  )
}

export default ContactMe
