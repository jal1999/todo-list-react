import styles from './App.module.css';
import NewTaskForm from './components/NewTaskForm.js';
import Tasks from './components/Tasks.js';
import React, { useState } from 'react';


function App() {
    const [currentTasks, setCurrentTasks] = useState([]);

    const onAddTask = task => {
        setCurrentTasks(prevCurrentTasks => {
            return (
                [...prevCurrentTasks, task]
            );
        })
    }

    const onDeleteTask = key => {
        console.log("Called on " + key);
        let tasks = currentTasks.filter(task => task !== key);
        console.log("Tasks...");
        console.log(tasks);
        setCurrentTasks(tasks);
    }

    const onDeleteAll = () => {
        setCurrentTasks([]);
    }

    return (
        <div className={styles.container}>
            <NewTaskForm className={styles.form} onAddTask={onAddTask} />
            <Tasks tasks={currentTasks} onDelete={onDeleteTask} />
            <button onClick={onDeleteAll} className={styles.button}>Delete All</button>
        </div>
    )
}

export default App;
