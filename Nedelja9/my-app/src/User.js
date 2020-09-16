import React from 'react';

const User = ({ user, users, setUsers }) => {
	const delItem = () => {
		let tmp = [ ...users ];
		tmp.splice(users.findIndex((el) => el.first_name === user.first_name), 1);
		setUsers(tmp);
	};
	return (
		<div>
			<div>
				{user.first_name} {user.last_name}
			</div>
			<button onClick={delItem}>DELETE USER</button>
		</div>
	);
};

export default User;
