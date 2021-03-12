import React from 'react';
import logo from '../images/logo.svg';
import hero from '../images/image-hero-mobile.jpg';
import styles from './NavBar.module.css';
import Menu from '../molecules/Menu';

const NavBar = () => {
	return (
		<React.Fragment>
			<img src={hero} alt='hero' className={styles.hero} />
			<header className={styles.navbar}>
				<img src={logo} alt='logo' className={styles.logo} />
        <Menu />
			</header>
		</React.Fragment>
	);
};

export default NavBar;
