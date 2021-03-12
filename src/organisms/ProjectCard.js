import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import logo from '../images/logo-mastercraft.svg';
import Modal from './Modal';
import SuccessModal from '../molecules/SuccessModal';

const ProjectCard = () => {
	const [modalPresence, setModalPresence] = useState(false);
	const [successModalPresence, setSuccessModalPresence] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);

	return (
		<div className={styles.card}>
			<img src={logo} alt='mastercraft logo' className={styles.logo} />
			<h3 className={styles.projectname}>Mastercraft Bamboo Monitor Riser</h3>
			<p className={styles.projectinfo}>
				A beautifully handcrafted monitor stand to reduce neck and eye strain.
			</p>
			<div className={styles.controlwrapper}>
				<button className={styles.btn} onClick={() => setModalPresence(true)}>
					Back this project
				</button>
				<svg
					className={styles.bookmarkicon}
					onClick={() => setIsBookmarked(!isBookmarked)}
					width='56'
					height='56'
					alt='bookmark icon'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g fill='none' fill-rule='evenodd'>
						<circle fill={isBookmarked ? 'hsl(176, 72%, 28%)' : '#2F2F2F'} cx='28' cy='28' r='28' />
						<path fill='#B1B1B1' d='M23 19v18l5-5.058L33 37V19z' />
					</g>
				</svg>
			</div>
			{modalPresence && (
				<Modal
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
			)}
			{successModalPresence && <SuccessModal setSuccessModalPresence={setSuccessModalPresence} />}
		</div>
	);
};

export default ProjectCard;
