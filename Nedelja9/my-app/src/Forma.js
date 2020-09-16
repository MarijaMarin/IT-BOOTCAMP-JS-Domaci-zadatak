import React, { useState } from 'react';
import User from './User';

const Forma = ({ users, setUser }) => {
	const [ filter, setFilter ] = useState('');

	let filteredUsers = users.filter(
		(user) =>
			user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
			user.last_name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div>
			<input onChange={(e) => setFilter(e.target.value)} />

			{filteredUsers.map((user) => <User user={user} users={users} setUser={setUser} />)}
		</div>
	);
};

export default Forma;
