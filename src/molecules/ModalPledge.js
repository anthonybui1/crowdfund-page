import React from 'react';
import styles from './ModalPledge.module.css';

const ModalPledge = ({ setModalPresence, setSuccessModalPresence, text, setText }) => {
	const handleClick = () => {
		setModalPresence(false);
		setSuccessModalPresence(true);
	};

	return (
		<React.Fragment>
			<div className={styles.container}>
				<p className={styles.prompt}>Enter your pledge</p>
				<div className={styles.formwrapper}>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						className={styles.input}
						placeholder='$'
					/>
					<button className={styles.btn} onClick={handleClick}>
						Continue
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ModalPledge;
