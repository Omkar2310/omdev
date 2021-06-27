import * as React from "react"

import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"

const Project = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Projects</h1>
    <Projects />
  </Layout>
)

export default Project
