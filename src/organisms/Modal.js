import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import closeIcon from '../images/icon-close-modal.svg';

const Modal = ({ setModalPresence }) => {
  const modalContainer = useRef()

	useEffect(() => {
    document.body.addEventListener('click', (e) => {
      console.log(modalContainer.current)
      console.log(e.target)
    })

    return document.body.removeEventListener('click', () => {
      console.log('Event listener for body click cleaned up!')
    })
  }, []);

	return ReactDOM.createPortal(
		<div className={styles.modalcontainer} ref={modalContainer}>
			<div className={styles.modalbody}>
				<img
					src={closeIcon}
					alt='close icon'
					className={styles.closeicon}
					onClick={() => setModalPresence(false)}
				/>
				<h2 className={styles.header}>Back this project</h2>
				<p className={styles.description}>
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
				</p>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
