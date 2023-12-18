import React from 'react'
import Navigation from './Nav'
import { Link } from 'react-router-dom'

const Home = ({ authenticated }) => {
  return (
    <section>
      <Navigation />
      <header>
        <h1>User Management System</h1>
      </header>
      <main>
        <p>Welcome to the User Management System!</p>
        {
          authenticated ? (
            <p>
              You are currently logged in. To access the dashboard, click the
              <Link to="/dashboard">Dashboard</Link> link in the navigation bar.
            </p>
          ) : (
            <p>
              To access the dashboard, please
              <Link to="/login">login</Link> or
              <Link to="/register">register</Link>.
            </p>
          )
        }
      </main>
    </section>
  )
}

export default Home