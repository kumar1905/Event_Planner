import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { addTask } = useTaskContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: 'Work',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.date) {
            alert("Please fill in required fields");
            return;
        }
        addTask({ ...formData, status: 'pending' });
        navigate('/');
    };

    return (
        <div className="form-page">
            <h2>Add New Task</h2>
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
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
