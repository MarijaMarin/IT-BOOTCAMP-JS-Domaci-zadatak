import React from 'react'

const UserList = ({users}) => {
    return (
        <>
         {users.map(user => <div key={user.id}>{user.first_name} {user.last_name}</div>)}
        </>
    )
}

export default UserList