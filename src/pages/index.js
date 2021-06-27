import * as React from "react"
import Zoom from "react-reveal/Zoom"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Zoom>
      <section>
        <Home />
      </section>
    </Zoom>

    <section>
      <AboutMe />
    </section>

    <section>
      <Projects />
    </section>

    <br />
    <br />
    <section>
      <Skills />
    </section>

    <br />
    <br />
    <br />
    <section>
      <ContactMe />
    </section>
  </Layout>
)

export default IndexPage
