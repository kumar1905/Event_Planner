import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { tasks, toggleComplete, deleteTask } = useTaskContext();
    const [filter, setFilter] = useState('all'); // all, pending, completed

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        return task.status === filter;
    });

    return (
        <div className="dashboard">
            <h2>Task Dashboard</h2>

            <div className="controls">
                <label>Filter: </label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="task-list">
                {filteredTasks.length === 0 ? <p>No tasks found.</p> : (
                    filteredTasks.map(task => (
                        <div key={task.id} className={`task-card ${task.status}`}>
                            <h3>{task.title} <span className="category-badge">{task.category}</span></h3>
                            <p>Date: {task.date}</p>
                            <div className="actions">
                                <Link to={`/task/${task.id}`}>View Details</Link>
                                <button onClick={() => toggleComplete(task.id)}>
                                    {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
                                </button>
                                <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
