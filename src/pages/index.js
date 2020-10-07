import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
      <SEO title="Home" />
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Protoype and build apps with React and Swift.</p>
      <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
