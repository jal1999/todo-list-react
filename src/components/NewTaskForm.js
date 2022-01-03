import React, {useState} from 'react';
import styles from './NewTaskForm.module.css';
const NewTaskForm = props => {
    const [currentTask, setCurrentTask] = useState('');

    const taskChangeHandler = event => {
        setCurrentTask(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        props.onAddTask(currentTask);
        setCurrentTask('');
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
                <label>Task name</label>
                <input value={currentTask} type="text" onChange={taskChangeHandler}/>
                {/* <button type="submit">Add</button> */}
            </form>
        </div>
    );
}

export default NewTaskForm;