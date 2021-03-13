import React, { useState } from 'react';
import NavBar from './organisms/NavBar';
import ProjectCard from './organisms/ProjectCard';
import StatsCard from './organisms/StatsCard';
import PledgeCard from './organisms/PledgeCard';
import Modal from './organisms/Modal';
import SuccessModal from './molecules/SuccessModal';

const App = () => {
	const [modalPresence, setModalPresence] = useState(false);
	const [successModalPresence, setSuccessModalPresence] = useState(false);

	return (
		<div className='container'>
			<NavBar />
			<main>
				<ProjectCard setModalPresence={setModalPresence} />
				<StatsCard />
				<PledgeCard setModalPresence={setModalPresence} />
			</main>
			{modalPresence && (
				<Modal
					setModalPresence={setModalPresence}
					setSuccessModalPresence={setSuccessModalPresence}
				/>
			)}
			{successModalPresence && <SuccessModal setSuccessModalPresence={setSuccessModalPresence} />}
		</div>
	);
};

export default App;
