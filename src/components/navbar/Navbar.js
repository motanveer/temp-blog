import React from 'react'
import * as styles from './navbar.module.css'
import { Link } from 'gatsby'


const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <Link className={styles.logo}to="/"><div>Mo Tanveer</div></Link>
            <Link to="/blog"><div className={styles.navButton}>Blog</div></Link>
            

        </div>
    )
}

export default Navbar
