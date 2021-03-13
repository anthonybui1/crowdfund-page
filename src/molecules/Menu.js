import React, { useState, useEffect } from 'react';
import hamburgerButton from '../images/icon-hamburger.svg';
import closeMenuButton from '../images/icon-close-menu.svg';
import styles from './Menu.module.css';
import MobileMenu from './MobileMenu';

const Menu = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});

		return window.removeEventListener('resize', () => {
			console.log('Resize event listener cleaned up!');
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

	const handleClick = () => {
		setTimeout(() => {
			setOpen(!isOpen);
		}, 50);
	};

	const renderMobileMenu = () => {
		return (
			<div>
				{isOpen ? (
					<img
						onClick={handleClick}
						src={closeMenuButton}
						alt='close menu button'
						className={styles.hamburger}
					/>
				) : (
					<img
						onClick={handleClick}
						src={hamburgerButton}
						alt='open menu button'
						className={styles.hamburger}
					/>
				)}
			</div>
		);
	};

	return (
		<React.Fragment>
			{windowWidth > 864 ? renderDesktopMenu() : renderMobileMenu()}
			{isOpen && <MobileMenu setOpen={setOpen} />}
		</React.Fragment>
	);
};

export default Menu;
