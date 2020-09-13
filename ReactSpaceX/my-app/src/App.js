import React, { useEffect, useState } from 'react';
import { getPastLaunch } from './services';
import LaunchList from './LaunchList';
import Select from './Select';
import './App.css';
import Header from './Header.js';

function App() {
	const [ launchList, setlaunchList ] = useState([]);

	useEffect(() => {
		getPastLaunch().then((res) => setlaunchList(res.data));
	}, []);
	return (
		<div className="App">
			<Header />
			<Select setlaunchList={setlaunchList} />
			<LaunchList arr={launchList} />
		</div>
	);
}

export default App;
