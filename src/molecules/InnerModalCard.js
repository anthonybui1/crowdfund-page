import React, { useState } from 'react';
import styles from './InnerModalCard.module.css';
import InnerModalPledge from './InnerModalPledge';

const InnerModalCard = ({ setModalPresence, setSuccessModalPresence, radioValue, selected }) => {
	const [text, setText] = useState('');

	const renderPledgeForm = () => {
		if (selected === radioValue) {
			return (
				<InnerModalPledge
					text={text}
					setText={setText}
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
			);
		}
	};

	return (
		<div className={styles.cardbody}>
			<div className={styles.headerwrapper}>
				<input type='radio' value={radioValue} name='item'></input>
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
			{renderPledgeForm()}
		</div>
	);
};

export default InnerModalCard;
