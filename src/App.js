import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const initialUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { id: 2, name: 'Regular User', email: 'user@example.com', password: 'user123', role: 'regular' },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'regular' });
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert('Please enter all required fields.');
      return;
    }

    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: '', email: '', password: '', role: 'regular' });
  };

  const handleUpdateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    {!setAuthenticated ? (
      <UnAuthenticatedRoute />
    ) : (
      <AuthenticatedRoute />
    )}
  );
};

export default App;
