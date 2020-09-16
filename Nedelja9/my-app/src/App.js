import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Forma from './Forma';
import { getUsers1, getUsers2 } from './services';
import UserList from './UserList';

import './App.css';

function App() {
	const [ users, setUsers ] = useState([]);

	useEffect(
		() => {
			getUsers1().then((res) => setUsers(res.data.data));
			getUsers2().then((res) => setUsers((prev) => prev.concat(res.data.data)));
		},
		[ setUsers ]
	);

	return (
		<Router>
			<nav>
				<Link to="/" style={{ marginRight: '20px', backgroundColor: '#456', color: 'white' }}>
					Users
				</Link>
				<Link to="/forma" style={{ marginRight: '20px', backgroundColor: '#456', color: 'white' }}>
					Find Users
				</Link>
			</nav>

			<Switch>
				<Route exact path="/forma">
					<Forma users={users} setUsers={setUsers} />
				</Route>

				<Route exact path="/">
					<UserList users={users} setUsers={setUsers} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
