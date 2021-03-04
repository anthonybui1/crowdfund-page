import React from 'react';
import hamburgerButton from '../images/icon-hamburger.svg';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<React.Fragment>
			<img src={hamburgerButton} alt="menu button" className={styles.hamburger}/>
		</React.Fragment>
	);
};

export default Menu;
