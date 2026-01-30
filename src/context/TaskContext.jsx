import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const TaskContext = createContext();

// Custom Hook for usage
export const useTaskContext = () => useContext(TaskContext);

// Provider Component
export const TaskProvider = ({ children }) => {
    // Initial dummy data or empty array
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Sample Task', date: '2023-11-01', category: 'Work', status: 'pending', description: 'This is a sample task.' },
        { id: 2, title: 'Grocery Shopping', date: '2023-11-02', category: 'Personal', status: 'completed', description: 'Buy milk and eggs.' },
    ]);

    // Add Task
    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now() }]);
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Update Task
    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    };

    // Toggle Completion
    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
        ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    );
};
