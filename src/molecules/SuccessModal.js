import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './SuccessModal.module.css';
import iconCheck from '../images/icon-check.svg';

const SuccessModal = ({ setSuccessModalPresence }) => {
	useEffect(() => {
		const successModalContainer = document.getElementById('success-modal-container');
		successModalContainer.addEventListener('click', (e) => {
			if (e.target.id === 'success-modal-container') {
				setSuccessModalPresence(false);
			}
		});
	}, [setSuccessModalPresence]);

	const handleClick = () => {
		setSuccessModalPresence(false);
	};

	return ReactDOM.createPortal(
		<div className={styles.modalcontainer} id='success-modal-container'>
			<div className={styles.modalbody}>
				<img src={iconCheck} alt='Thank you icon' />
				<h3 className={styles.header}>Thanks for your support!</h3>
				<p className={styles.description}>
					Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
					worldwide. You will get an email once our campaign is completed.
				</p>
				<button className={styles.btn} onClick={handleClick}>
					Got it!
				</button>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default SuccessModal;
