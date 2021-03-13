import React, { useEffect } from 'react';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ setOpen }) => {
	useEffect(() => {
		const clickedAway = () => {
			window.addEventListener('click', (e) => {
				if (e.target.id !== 'hamburger') {
					console.log('clicked');
					setOpen(false);
				}
			});
		};

		window.addEventListener('click', clickedAway);

		return () => {
			window.removeEventListener('click', clickedAway);
			console.log('cleanup!');
		};
	}, [setOpen]);

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
