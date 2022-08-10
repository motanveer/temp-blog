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
      <div className={styles.contentContainer}>
        <div className={styles.heroSection}>
        <h1 className={styles.heroText}>Mo Tanveer is an Actor, Filmmaker, and Growth Marketer.</h1>

          <StaticImage className={styles.heroImage}
            src="../images/Mo-Tanveer.jpg"
            alt="Mo Tanveer"
            placeholder="tracedSVG"
            layout="constrained"
          />

          
        </div>

        <div className={styles.bio}>
          <br/>Hi, I'm Mo a a professional actor, filmmaker, growth marketer, and all-around digital creator. Ask me about startups, VFX, film production, sales, marketing, and web development.
          
        </div>

        <div className={styles.imageGrid}>

        </div>

        

      </div>
      <Footer />

    </div>
  )
}

export default IndexPage
