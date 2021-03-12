import React from 'react';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
	return (
		<nav className={styles.menucard}>
			<a href='/' className={styles.link}>
				<div className={`${styles.linktext} ${styles.rule}`}>About</div>
			</a>
			<a href='/' className={styles.link}>
				<div className={`${styles.linktext} ${styles.rule}`}>Discover</div>
			</a>
			<a href='/' className={styles.link}>
				<div className={styles.linktext}>Get Started</div>
			</a>
		</nav>
	);
};

export default MobileMenu;
