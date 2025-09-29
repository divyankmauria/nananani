import React from 'react';
import { Link } from 'react-router-dom';

function Header({ currentUser, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h2>Nananani</h2>
        </Link>
        <nav className="nav">
          <Link to="/tasks">Browse Tasks</Link>
          <Link to="/providers">Find Helpers</Link>
          <Link to="/post-task">Post Task</Link>
          <Link to="/register-provider">Become Helper</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
