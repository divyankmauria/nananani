import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TaskForm from './pages/TaskForm';
import ProviderRegistration from './pages/ProviderRegistration';
import TaskList from './pages/TaskList';
import ProviderList from './pages/ProviderList';
import TaskDetail from './pages/TaskDetail';
import ProviderDetail from './pages/ProviderDetail';

// Configure axios base URL
axios.defaults.baseURL = 'http://localhost:5001';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <Router>
      <div className="App">
        <Header currentUser={currentUser} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-task" element={<TaskForm />} />
            <Route path="/register-provider" element={<ProviderRegistration />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/providers" element={<ProviderList />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/providers/:id" element={<ProviderDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
