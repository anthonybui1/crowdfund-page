import React from 'react';
import styles from './InnerModalPledge.module.css';

const InnerModalPledge = ({ setModalPresence, setSuccessModalPresence }) => {
	const handleClick = () => {
		setModalPresence(false);
		setSuccessModalPresence(true);
	};

	return (
		<React.Fragment>
			<div className={styles.container}>
				<p className={styles.prompt}>Enter your pledge</p>
				<div className={styles.formwrapper}>
					<input type='text' className={styles.input} placeholder='$' />
					<button className={styles.btn} onClick={handleClick}>
						Continue
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InnerModalPledge;
