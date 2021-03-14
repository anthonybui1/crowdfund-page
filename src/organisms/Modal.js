import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import closeIcon from '../images/icon-close-modal.svg';
import InnerModalCard from '../molecules/InnerModalCard';

const Modal = ({ setModalPresence, setSuccessModalPresence }) => {
	const [selected, setSelected] = useState(null);

	const onChangeValue = (e) => {
		if (e.target.type === 'radio') {
			setSelected(e.target.value);
		}
	};

	useEffect(() => {
		const modalContainer = document.getElementById('modal-container');
		modalContainer.addEventListener('click', (e) => {
			if (e.target.id === 'modal-container') {
				setModalPresence(false);
			}
		});

		return document.body.removeEventListener('click', () => {
			console.log('Modal clickaway listener cleaned up!');
		});
	}, [setModalPresence]);

	return ReactDOM.createPortal(
		<React.Fragment>
			<div className={styles.modalcontainer} id='modal-container'></div>
			<div className={styles.modalbody} onChange={onChangeValue}>
				<div className={styles.headericonrow}>
					<h2 className={styles.header}>Back this project</h2>
					<img
						src={closeIcon}
						alt='close icon'
						className={styles.closeicon}
						onClick={() => setModalPresence(false)}
					/>
				</div>
				<p className={styles.description}>
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
				</p>
				<InnerModalCard
					selected={selected}
					radioValue='choice1'
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
				<InnerModalCard
					selected={selected}
					radioValue='choice2'
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
				<InnerModalCard
					selected={selected}
					radioValue='choice3'
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
				<InnerModalCard
					selected={selected}
					radioValue='choice4'
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
			</div>
		</React.Fragment>,
		document.getElementById('modal')
	);
};

export default Modal;
