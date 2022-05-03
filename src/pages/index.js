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
        
          <StaticImage className={styles.heroImage}
            src="../images/Mo-Tanveer.jpg"
            alt="Mo Tanveer"
            placeholder="tracedSVG"
            layout="constrained"
          />

<h1 className={styles.heroText}>Hi. I’m Mo Tanveer— Actor, Digital Creator, and Growth Marketer.</h1>
          
        </div>

        <div className={styles.bio}>
          <br/>I’m a 2000s Disney Channel aficionado that loves skateboarding and thrift shopping.
Ask me about startups, marketing, design, sales, web development, filmmaking, and VFX.
          
        </div>

        <div className={styles.imageGrid}>
        <StaticImage className={styles.heroImage} src="../images/nt1.jpg" alt="Mo Tanveer" placeholder="tracedSVG" layout="fullWidth"/>


        </div>

        

      </div>
      <Footer />

    </div>
  )
}

export default IndexPage
