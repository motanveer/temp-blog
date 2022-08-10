import React from 'react'
import * as styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <ul className={styles.list}>
                <a href="mailto:mo@motanveer.com"><li>E-MAIL</li></a>
                <a href="https://instagram.com/mohtanveer"><li>INSTAGRAM</li></a>
                <a href="https://www.instagram.com/brakefastproductions"><li>BRAKE/FAST PRODUCTIONS</li></a>

            </ul>
        </div>
    )
}

export default Footer
