import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import TaskDetails from './pages/TaskDetails';
import { TaskProvider } from './context/TaskContext';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <h1>Event Planner</h1>
            <div className="links">
              <Link to="/">Dashboard</Link>
              <Link to="/add">Add Task</Link>
            </div>
          </nav>
          
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddTask />} />
              <Route path="/edit/:id" element={<EditTask />} />
              <Route path="/task/:id" element={<TaskDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
