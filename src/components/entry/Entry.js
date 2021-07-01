import React from 'react'
import * as styles from './Entry.module.css'
import {Link} from 'gatsby'
const Entry = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>{props.date}</div>
             <Link to={"/blog/" + props.slug}><div className={styles.title}>{props.title}</div></Link>
            <div className={styles.excerpt}>{props.excerpt}</div>
        </div>
    )
}
export default Entry
