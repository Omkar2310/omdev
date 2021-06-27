import React from "react"
import "./styles.main.css"
import Typewriter from "typewriter-effect"
import { ButtonHome } from "../ButtonElements"
const Home = () => {
  return (
    <div className="home-container">
      <h1>Hello I'm Omkar</h1>
      <p>
        <Typewriter
          options={{
            strings: ["Web Developer", "Android Developer", "FreeLancer"],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </p>
      <div className="home-button">
        <a href="https://drive.google.com/file/d/1qigpM5ZrStNMs-UWaruIFa0ptHqhMACP/view?usp=sharing">
          <ButtonHome fontBig big primary>
            Resume
          </ButtonHome>
        </a>
      </div>
    </div>
  )
}

export default Home
