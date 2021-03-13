import React from 'react';
import styles from './InnerModalCard.module.css';
import InnerModalPledge from './InnerModalPledge';

const InnerModalCard = ({ setModalPresence, setSuccessModalPresence }) => {
	return (
		<div className={styles.cardbody}>
			<div className={styles.headerwrapper}>
				<div className={styles.circle}></div>
				<div className={styles.headertext}>
					<h3 className={styles.header}>Bamboo Stand</h3>
					<p className={styles.subheader}>Pledge $25 or more</p>
				</div>
			</div>
			<p className={styles.description}>
				You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
				campaign, and you'll be added to a special Backer member list.
			</p>
			<h3>
				101<span className={styles.span}> left</span>
			</h3>
			<InnerModalPledge
				setModalPresence={setModalPresence}
				setSuccessModalPresence={setSuccessModalPresence}
			/>
		</div>
	);
};

export default InnerModalCard;
