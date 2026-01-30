import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { useParams, Link, useNavigate } from 'react-router-dom';

const TaskDetails = () => {
    const { tasks, deleteTask } = useTaskContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) return <p>Task not found!</p>;

    const handleDelete = () => {
        deleteTask(task.id);
        navigate('/');
    };

    return (
        <div className="details-page">
            <h2>{task.title}</h2>
            <p><strong>Date:</strong> {task.date}</p>
            <p><strong>Category:</strong> {task.category}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Description:</strong></p>
            <p>{task.description}</p>

            <div className="actions">
                <Link to={`/edit/${task.id}`} className="edit-btn">Edit</Link>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
                <Link to="/">Back to Dashboard</Link>
            </div>
        </div>
    );
};

export default TaskDetails;
