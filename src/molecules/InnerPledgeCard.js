import React from 'react';
import styles from './InnerPledgeCard.module.css';

const InnerPledgeCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<h4 className={styles.title}>Bamboo Stand</h4>
				<p className={styles.subtitle}>Pledge $25 or more</p>
			</div>
			<div className={styles.description}>
				<p className={styles.paragraph}>
					You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
					campaign, and you'll be added to a special Backer member list.
				</p>
			</div>
			<div className={styles.remaining}>
				<h2>101</h2>
				<p className={styles.subtext}>left</p>
			</div>
			<button className={styles.btn}>Select Reward</button>
		</div>
	);
};

export default InnerPledgeCard;
