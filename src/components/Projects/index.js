import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/custom-animations/cube-animation.css"
import AmazonClone from "../../images/projects/amaz.webp"
import EcomClone from "../../images/projects/ecomm.webp"
import Pothole from "../../images/projects/pothole.webp"
import Malnut from "../../images/projects/malnut.webp"
import Sangit from "../../images/projects/sangit.png"
import Todoist from "../../images/projects/todoist.png"
import Fade from "react-reveal/Fade"
import "./styles.project.css"
const slider = (
  <AwesomeSlider animation="cubeAnimation">
    <div className="container1">
      <div class="hovereffect">
        <img class="img-responsive" src={Sangit} alt="" />
        <div class="overlay">
          <h2>Music Player SPOTIFY Api using ReactJS </h2>
          <a class="info" href="https://github.com/Omkar2310/sangit-app/">
            Github
          </a>
          &nbsp;&nbsp;&nbsp;
          <a class="info" href="https://sangit-app.firebaseapp.com/">
            Live
          </a>
        </div>
      </div>
    </div>

    <div className="container1">
      <div class="hovereffect">
        <img class="img-responsive" src={Todoist} alt="" />
        <div class="overlay">
          <h2>TODOIST CLONE using ReactJS </h2>
          <a class="info" href="https://github.com/Omkar2310/todoist">
            Github
          </a>
          &nbsp;&nbsp;&nbsp;
          <a class="info" href="https://todoist-88c60.web.app/">
            Live
          </a>
        </div>
      </div>
    </div>
    <div className="container1">
      <div class="hovereffect">
        <img class="img-responsive" src={AmazonClone} alt="" />
        <div class="overlay">
          <h2>Amazon Clone Using ReactJs </h2>
          <a class="info" href="https://github.com/Omkar2310/amazon-clone">
            Github
          </a>
          &nbsp;&nbsp;&nbsp;
          <a class="info" href="https://clone-f2c03.firebaseapp.com/">
            Live
          </a>
        </div>
      </div>
    </div>
    <div className="container1">
      <div class="hovereffect">
        <img class="img-responsive" src={EcomClone} alt="" />
        <div class="overlay">
          <h2>Clothing Website Using ReactJs </h2>
          <a class="info" href="https://github.com/Omkar2310/smart">
            Github
          </a>
          &nbsp;&nbsp;&nbsp;
          <a class="info" href="https://swadeshimart.herokuapp.com/">
            Live
          </a>
        </div>
      </div>
    </div>

    <div className="container1">
      <div class="hovereffect">
        <img class="img-responsive" src={Pothole} alt="" />
        <div class="overlay">
          <h2>Pothole Detection System Android </h2>
          <a class="info" href="https://github.com/Omkar2310/PotholeFixitApp">
            Github
          </a>
        </div>
      </div>
    </div>
    <div className="container1">
      <div class="hovereffect">
        <img class="img-responsive" src={Malnut} alt="" />
        <div class="overlay">
          <h2>Malnutrition App Using Android </h2>
          <a
            class="info"
            href="https://github.com/Omkar2310/MalnutritionAndroidApp"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </AwesomeSlider>
)
const Projects = () => {
  return (
    <div id="project">
      <Fade left>
        <h1
          className="pt-3 text-center font-details pb-3"
          style={{ color: "whitesmoke", fontSize: "3rem" }}
        >
          PROJECTS
        </h1>
      </Fade>
      {slider}
    </div>
  )
}

export default Projects
