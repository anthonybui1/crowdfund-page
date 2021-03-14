import React from 'react';
import styles from './InnerPledgeCard.module.css';

const InnerPledgeCard = ({ setModalPresence, title, pledgeAmount, description, remaining }) => {
	const handleClick = () => {
		window.scrollTo(0, 0);
		setModalPresence(true);
	};

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.subtitle}>Pledge ${pledgeAmount} or more</p>
			</div>
			<div className={styles.description}>
				<p className={styles.paragraph}>{description}</p>
			</div>
			<div className={styles.remaining}>
				<h2>{remaining}</h2>
				<p className={styles.subtext}>left</p>
			</div>
			<button onClick={handleClick} className={styles.btn}>
				Select Reward
			</button>
		</div>
	);
};

export default InnerPledgeCard;
