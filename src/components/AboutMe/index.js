import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Profile from "../../images/prof.jpeg"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import "./styles.about.css"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
const AboutMe = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-div">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={8} md={6}>
                <Fade left>
                  <Row className="justify-content-center mb-2 mr-2 ">
                    <Zoom top>
                      <Image
                        className="profile justify-content-end"
                        alt="profile"
                        src={Profile}
                        fluid
                      />
                    </Zoom>
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} md={6}>
                <Fade right>
                  <Row className=" align-items-start p-2 my-details rounded">
                    <Fade right>
                      Hi there! I am Omkar Sanjay Mankar
                      <br />
                      I am Computer Engineer from PICT,Pune.
                      <br />A passionate Software Developer, born and brought up
                      in India.I am a Software Developer with knowledge of
                      C++,Web Development,Android Development,
                      <br />
                      React.js,Redux,Node.js,Flutter,Deep Learning and databases
                      like MySql,MongoDb,Firebase.
                      <br />
                      <br />I love learning about new technologies, what
                      problems are they solving and How can I use them to build
                      better and scalable products.
                      <br />I am seeking Full Time opportunities in Software
                      Development Field.I also develop products for my clients
                      which can be used to solve real-life problems and make our
                      lives easier.
                      <br /> <br />
                    </Fade>
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="#contact">
                          <Button className="m-2" variant="outline-primary">
                            Let's talk
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://drive.google.com/file/d/1qigpM5ZrStNMs-UWaruIFa0ptHqhMACP/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="m-2" variant="outline-success">
                            My Resume
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/omkar2310"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="m-2" variant="outline-dark">
                            GitHub
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/omkarmankar"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="m-2" variant="outline-info">
                            LinkedIn
                          </Button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
