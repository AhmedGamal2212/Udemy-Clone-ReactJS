import React from 'react'
import LinksList from '../links-list/LinksList';
import links from './links';
import styles from './Footer.module.css'

function Footer() {
    return ( 
        <>
            <footer className={styles.footer}>
                <div className={styles.linksContainer}>
                    <div className={styles.languageSwitch}>
                        <button className={styles.button}><i className="fa-solid fa-globe"></i><span>English</span></button>
                    </div>
                    {links.map((group, idx) => <LinksList className={styles.linksGroup} key={idx} links={group} />)}
                </div>
                <div className={styles.logoCopyRights}>
                    <img src={require('../../materials/logo-udemy.png')} alt="logo" style={{width:'100px', height:'100px'}} />
                    <div className={styles.copyRights}>© 2022 Udemy, Inc.</div>
                </div>
            </footer>
        </>
     );
}

export default Footer;