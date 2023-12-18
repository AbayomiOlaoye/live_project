import React from 'react';

const Dashboard = ({ users, userRole, handleAddUser, handleUpdateUser, handleDeleteUser }) => {
  const isAdmin = userRole === 'admin';

  const handleAddUserClick = () => {
    if (isAdmin) {
      console.log('Adding a new user...');
    } else {
      alert('You do not have permission to add users.');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {isAdmin && (
        <>
          <h2>Add User</h2>
          <button onClick={handleAddUserClick}>Add User</button>
        </>
      )}
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.role}
            <button onClick={() => handleUpdateUser(user.id, { name: 'Updated Name' })}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
