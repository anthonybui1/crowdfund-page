import React from 'react';
import styles from './BookmarkSlider.module.css';

const BookmarkSlider = ({ isBookmarked, setIsBookmarked }) => {
	return (
		<div className={styles.slidertray}>
			<svg
				className={isBookmarked ? styles.activebookmark : styles.inactivebookmark}
				onClick={() => setIsBookmarked(!isBookmarked)}
				width='56'
				height='56'
				alt='bookmark icon'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g fill='none' fillRule='evenodd'>
					<circle fill={isBookmarked ? 'hsl(176, 72%, 28%)' : '#2F2F2F'} cx='28' cy='28' r='28' />
					<path fill='#B1B1B1' d='M23 19v18l5-5.058L33 37V19z' />
				</g>
			</svg>
		</div>
	);
};

export default BookmarkSlider;
