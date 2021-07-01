import React from 'react'
import * as styles from './navbar.module.css'
import { Link } from 'gatsby'


const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <Link className={styles.logo}to="/"><p>Mo Tanveer</p></Link>
            <div className={styles.navButton}>Blog</div>

        </div>
    )
}

export default Navbar
