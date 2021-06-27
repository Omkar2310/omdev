import React from "react"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import "./styles.skills.css"
import { skills } from "./skillsData"
const Skills = () => {
  return (
    <div className="skill">
      <div className="pt-3 pb-3" id="skills">
        <Zoom>
          <h1
            className="text-center font-details-b pb-4"
            style={{ color: "whitesmoke" }}
          >
            TECH SKILLS
          </h1>
        </Zoom>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            {/* Programming Languages */}
            <Col md={4}>
              <Fade left>
                <Card className="carddeck focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Programming Languages
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      {skills.programmingLanguages.map((skill, index) => (
                        <span className="p-2" key={index}>
                          {skill.skillName}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>

              {/* Database */}
              <Fade left>
                <Card className="carddeck focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Database
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      {skills.databases.map((skill, index) => (
                        <span className="p-2" key={index}>
                          {skill.skillName}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            {/* Backend */}
            <Col md={4}>
              <Fade top>
                <Card className="carddeck focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Backend
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      {skills.backend.map((skill, index) => (
                        <span className="p-2" key={index}>
                          {skill.skillName}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
              {/* Hosting Platforms */}
              <Fade top>
                <Card className="carddeck focus mt-2 mb-2 ">
                  <Card.Body>
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Hosting Platforms
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      {skills.hostingPlatforms.map((skill, index) => (
                        <span className="p-2" key={index}>
                          {skill.skillName}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            {/* Frontend */}
            <Col md={4}>
              <Fade right>
                <Card className="carddeck focus mt-2 mb-2">
                  <Card.Body>
                    {/* Frontend */}
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Frontend
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      {skills.frontend.map((skill, index) => (
                        <span className="p-2" key={index}>
                          {skill.skillName}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
              {/* Technology */}
              <Fade right>
                <Card className="carddeck focus mt-2 mb-2">
                  <Card.Body>
                    {/* Frontend */}
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Technology
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      {skills.technology.map((skill, index) => (
                        <span className="p-2" key={index}>
                          {skill.skillName}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>

              {/* Version Control */}
              <Fade right>
                <Card className="carddeck focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title
                      className="text-center  card-title"
                      style={{ color: "whitesmoke" }}
                    >
                      Version Control
                    </Card.Title>
                    <hr />
                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="card-text d-flex justify-content-start flex-column"
                    >
                      <span className="p-2">
                        {skills.versionControl[0].skillName}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          </Row>
        </CardDeck>
      </div>
    </div>
  )
}

export default Skills
