import React from 'react';
import styles from './Tasks.module.css';

const Tasks = props => {

    const onDelete = event => {
        console.log(event);
        props.onDelete(event.target.getAttribute("att"));
    }

    return (
        <ul className={styles.list}>
            {props.tasks.map((task) => {
                console.log("Mapped")
                return (
                    <div className={styles.itemContainer}>
                        <li key={task} className={styles.listItem}>{task}</li>
                        <button att={task} onClick={onDelete} className={styles.button}>Delete</button>
                    </div>
                )
            }
            )
            }
        </ul>
    )
}
export default Tasks;