import * as React from "react"
import ContactMe from "../components/ContactMe"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Contacts" />
    <h1>Contact</h1>
    <ContactMe />
  </Layout>
)

export default Contact
