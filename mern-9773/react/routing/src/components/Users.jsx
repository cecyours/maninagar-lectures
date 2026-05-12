import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    const userList = [
        { id: 1, name: 'Tanvi' },
        { id: 2, name: 'Aarav' },
        { id: 3, name: 'Mira' },
    ];
  
    return (
        <div>
        <h2> Users List</h2>
        {userList.map(user => (
            <p key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            </p>
        ))}
        <Outlet />
        </div>
    );
};
 
export default Users;