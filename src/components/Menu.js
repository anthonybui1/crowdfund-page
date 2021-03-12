import React, { useState, useEffect } from 'react';
import hamburgerButton from '../images/icon-hamburger.svg';
import styles from './Menu.module.css';
import MobileMenu from './MobileMenu';

const Menu = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	}, [windowWidth]);

	const renderDesktopMenu = () => {
		return (
			<nav className={styles.nav}>
				<a href='/' className={styles.link}>
					About
				</a>
				<a href='/' className={styles.link}>
					Discover
				</a>
				<a href='/' className={styles.link}>
					Get Started
				</a>
			</nav>
		);
	};

	const renderMobileMenu = () => {
		return (
			<div onClick={() => setOpen(!isOpen)}>
				<img src={hamburgerButton} alt='menu button' className={styles.hamburger} />
			</div>
		);
	};

	return (
		<React.Fragment>
			{windowWidth > 864 ? renderDesktopMenu() : renderMobileMenu()}
			{isOpen && <MobileMenu />}
		</React.Fragment>
	);
};

export default Menu;
