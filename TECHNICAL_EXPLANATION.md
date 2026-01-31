# Technical Overview: Event Planner Application

This document provides a technical breakdown of the "Event Planner" React application. It is designed to help you explain the project structure, stack, and logic to your mentor.

## 1. Technology Stack

*   **Framework**: [React](https://react.dev/) (v19) - A library for building user interfaces.
*   **Build Tool**: [Vite](https://vitejs.dev/) - A fast build tool and development server.
*   **Routing**: [React Router](https://reactrouter.com/) (v7) - Handles navigation and URL synchronization in the Single Page Application (SPA).
*   **Language**: JavaScript (ES Modules).
*   **Styling**: Plain CSS (`App.css`).

## 2. Project Architecture

The application follows a standard modular React architecture, separating concerns into Pages, Context, and Components.

### Folder Structure
```
src/
├── context/       # Global State Management (Context API)
├── pages/         # Page components representing different routes
├── App.jsx        # Main application component & Routing setup
└── main.jsx       # Entry point rendering the React root
```

## 3. Key Technical Implementations

### A. Routing & Navigation (`App.jsx`)
The app uses `react-router-dom` for client-side routing.
*   **`BrowserRouter`**: Wraps the application to enable routing context.
*   **`Routes` & `Route`**: Define the mapping between URL paths and Components.
    *   `/` -> `Dashboard` (Home page listing tasks)
    *   `/add` -> `AddTask` (Form to create new task)
    *   `/edit/:id` -> `EditTask` (Form to modify task, using dynamic URL parameters)
    *   `/task/:id` -> `TaskDetails` (Detailed view of a specific task)
*   **`Link`**: Used for navigation (e.g., in the Navbar) to prevent full page reloads.

### B. State Management (`TaskContext.jsx`)
Instead of "Prop Drilling", the application uses the **React Context API** for global state management.
*   **`TaskContext`**: The context object holding the state.
*   **`useTaskContext`**: A custom hook created to simplify consuming the context in other components (Abstracts `useContext(TaskContext)`).
*   **`TaskProvider`**: A wrapper component that manages the state logic:
    *   **State**: Uses `useState` to maintain an array of tasks (Mock data initially).
    *   **CRUD Actions**:
        *   `addTask(newTask)`: Adds a new item with a timestamp-based ID.
        *   `deleteTask(id)`: Filters out the item by ID.
        *   `updateTask(id, updatedTask)`: Maps through the array to find and update the specific item.
        *   `toggleComplete(id)`: Toggles the status between 'pending' and 'completed'.

### C. Component Logic
*   **Dashboard**: Consumes `useTaskContext` to get the `tasks` array and render them.
*   **TaskDetails**: view unique task details.
*   **Forms (Add/Edit)**: Likely use local state for form inputs and call `addTask` or `updateTask` from the context upon submission.

## 4. Development Workflow
*   **Vite**: Handles hot module replacement (HMR), making development fast.
*   **ESLint**: Enforces code quality and catches errors during development.

## 5. Summary for Mentor
In summary, this project demonstrates core React competencies:
1.  **SPA Fundamentals**: Routing and Navigation.
2.  **State Management**: Implementing Context API and Custom Hooks (`useTaskContext`).
3.  **CRUD Operations**: Handling data manipulation (Create, Read, Update, Delete).
4.  **Modern React Hooks**: Usage of `useState`, `useContext`, `useEffect`.
