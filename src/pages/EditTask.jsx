import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
    const { tasks, updateTask } = useTaskContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: 'Work',
        description: ''
    });

    useEffect(() => {
        const taskToEdit = tasks.find(t => t.id === parseInt(id));
        if (taskToEdit) {
            setFormData(taskToEdit);
        } else {
            // Handle not found
            navigate('/');
        }
    }, [id, tasks, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(parseInt(id), formData);
        navigate('/');
    };

    return (
        <div className="form-page">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="School">School</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </div>
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
};

export default EditTask;
