import * as React from "react"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import * as styles from './index.module.css'
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

// markup
const IndexPage = () => {
  return (
    <div>

      <SEO title="Mo Tanveer" />
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.heroSection}>
        
          <StaticImage className={styles.heroImage}
            src="../images/Mo-Tanveer.jpg"
            alt="Mo Tanveer"
            placeholder="tracedSVG"
            layout="constrained"
          />

<h1 className={styles.heroText}>Hi. I’m Mo Tanveer— Actor, Digital Creator, and Growth Marketer.</h1>
          
        </div>
        <div className={styles.bio}>
          I’m a 2000s Disney Channel aficionado that loves skateboarding and thrift shopping. <br/>Ask me about startups, marketing, design, sales, web development, filmmaking, and VFX.
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
