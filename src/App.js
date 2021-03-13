import React from 'react';
import NavBar from './organisms/NavBar';
import ProjectCard from './organisms/ProjectCard';
import StatsCard from './organisms/StatsCard';
import PledgeCard from './organisms/PledgeCard';

const App = () => {
	return (
		<div className='container'>
			<NavBar />
			<main>
				<ProjectCard />
				<StatsCard />
				<PledgeCard />
			</main>
		</div>
	);
};

export default App;
