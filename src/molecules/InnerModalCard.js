import React, { useState } from 'react';
import styles from './InnerModalCard.module.css';
import InnerModalPledge from './InnerModalPledge';

const InnerModalCard = ({
	setModalPresence,
	setSuccessModalPresence,
	radioValue,
	selected,
	title,
	pledgeAmount,
	description,
	remaining,
}) => {
	const [text, setText] = useState('');

	const renderPledgeForm = () => {
		if (selected === radioValue && remaining !== '0') {
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

	const renderRemaining = () => {
		if (remaining) {
			return (
				<React.Fragment>
					{remaining}
					<span className={styles.span}> left</span>
				</React.Fragment>
			);
		}
	};

	return (
		<div className={styles.cardbody}>
			<div className={styles.headerwrapper}>
				<input type='radio' value={radioValue} name='item'></input>
				<div className={styles.headertext}>
					<h3 className={styles.header}>{title}</h3>
					<p className={styles.subheader}>{pledgeAmount ? `Pledge ${pledgeAmount} or more` : ''}</p>
				</div>
			</div>
			<p className={styles.description}>{description}</p>
			<h3>{renderRemaining()}</h3>
			{renderPledgeForm()}
		</div>
	);
};

export default InnerModalCard;
