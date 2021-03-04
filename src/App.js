import React from 'react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import StatsCard from './components/StatsCard';
import PledgeCard from './components/PledgeCard';

const App = () => {
	return (
		<div>
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
