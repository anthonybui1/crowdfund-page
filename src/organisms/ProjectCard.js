import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import logo from '../images/logo-mastercraft.svg';
import bookmark from '../images/icon-bookmark.svg';
import Modal from './Modal';

const ProjectCard = () => {
	const [modalPresence, setModalPresence] = useState(true);

	return (
		<div className={styles.card}>
			<img src={logo} alt='mastercraft logo' className={styles.logo} />
			<h3 className={styles.projectname}>Mastercraft Bamboo Monitor Riser</h3>
			<p className={styles.projectinfo}>
				A beautifully handcrafted monitor stand to reduce neck and eye strain.
			</p>
			<div className={styles.controlwrapper}>
				<button className={styles.btn} onClick={() => setModalPresence(true)}>Back this project</button>
				<img className={styles.bookmarkicon} src={bookmark} alt='bookmark icon' />
			</div>
			{modalPresence ? <Modal setModalPresence={setModalPresence} /> : null}
		</div>
	);
};

export default ProjectCard;
