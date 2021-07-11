import * as React from "react"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import * as styles from './index.module.css'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.contentContainer}>
      <StaticImage className={styles.heroImage}
      src="../images/Mo_Tanveer-min.png"
      alt="Mo Tanveer"
      placeholder="tracedSVG"
      layout="constrained"
    />
        <h1 className={styles.heroText}>Hi. I’m Mo Tanveer— a marketer, designer, & front-end developer.</h1>
        <div className={styles.bio}>
        I’m a 2000s Disney Channel aficionado. Aspiring film maker and actor. I also love skateboarding, collection action figures, and building cool things.
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default IndexPage
