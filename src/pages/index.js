import * as React from "react"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import * as styles from './index.module.css'

// markup
const IndexPage = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.contentContainer}>
        <h1 className={styles.heroText}>Hey.</h1>
        <div className={styles.bio}>
        I’m Mo—a growth marketer, designer, and front-end developer. I like skateboarding, acting, and making videos.
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default IndexPage
