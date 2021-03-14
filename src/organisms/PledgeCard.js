import React from 'react';
import styles from './PledgeCard.module.css';
import PledgeInnerCard from '../molecules/PledgeInnerCard';
import { data } from '../api/data';

const PledgeCard = ({ setModalPresence }) => {
	return (
		<div className={styles.card}>
			<div>
				<h3 className={styles.header}>About this project</h3>
				<p className={styles.description}>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
					screen to a more comfortable viewing height. Placing your monitor at eye level has the
					potential to improve your posture and make you more comfortable while at work, helping you
					stay focused on the task at hand.
				</p>
				<p className={styles.description}>
					Featuring artisan craftmanship, the simplicity of design creates extra desk space below
					your computer to allow notepads, pens, and USB sticks to be stored under the stand.
				</p>
			</div>
			{data.map((item) => {
				return (
					<PledgeInnerCard
						key={item.key}
						title={item.title}
						pledgeAmount={item.pledgeAmount}
						description={item.description}
						remaining={item.remaining}
						setModalPresence={setModalPresence}
					/>
				);
			})}
		</div>
	);
};

export default PledgeCard;
