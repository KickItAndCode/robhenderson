import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
import ContactMe from "../components/contactme"
import AboutMe from "../components/aboutme"
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <AboutMe />
    <Skills/>
    <ContactMe />
    <Footer/>
    <Link to="/page-2/" />
  </Layout>
)

export default IndexPage
