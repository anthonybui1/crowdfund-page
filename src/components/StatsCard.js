import React from 'react';
import styles from './StatsCard.module.css';

const StatsCard = () => {
	return (
		<div className={styles.card}>
			<div>
				<h2 className={styles.infohead}>$89,914</h2>
				<p className={styles.infosub}>of $100,000 backed</p>
        <hr className={styles.rule}/>
			</div>
			<div>
				<h2 className={styles.infohead}>5,007</h2>
				<p className={styles.infosub}>total backers</p>
        <hr className={styles.rule}/>
			</div>
			<div>
				<h2 className={styles.infohead}>56</h2>
				<p className={styles.infosub}>days left</p>
			</div>
			<div>
				<div className={styles.outerbar}>
					<div className={styles.innerbar}></div>
				</div>
			</div>
		</div>
	);
};

export default StatsCard;
