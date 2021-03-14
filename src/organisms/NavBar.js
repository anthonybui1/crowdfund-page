import React from 'react';
import logo from '../images/logo.svg';
import hero from '../images/image-hero-desktop.jpg';
import mobilehero from '../images/image-hero-mobile.jpg';
import styles from './NavBar.module.css';
import Menu from '../molecules/Menu';

const NavBar = () => {
	return (
		<React.Fragment>
			<picture>
				<source media='(max-width: 864px)' srcSet={mobilehero} />
				<img src={hero} alt='hero' className={styles.hero} />
			</picture>
			<header className={styles.navbar}>
				<img src={logo} alt='logo' className={styles.logo} />
				<Menu />
			</header>
		</React.Fragment>
	);
};

export default NavBar;
