import React from 'react'
import * as styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <ul className={styles.list}>
                <a href="https://twitter.com/mohtanveer"><li>Twitter</li></a>
                <a href="mailto:mo@motanveer.com"><li>E-mail</li></a>
                <a href="https://instagram.com/mohtanveer"><li>Insta</li></a>
                <a href="https://www.tiktok.com/@realmotanveer"><li>TikTok</li></a>
            </ul>
        </div>
    )
}

export default Footer
