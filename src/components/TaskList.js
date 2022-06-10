import React from 'react';
import useStore from '../store';

const TaskList = () => {
    const { tasks, removeTask } = useStore(state => ({
        tasks: state.tasks,
        removeTask: state.removeTask
    }))
    return (
        <div>
            {
                tasks.map(task => (
                    <div key={task.id}>
                        <h1>{task.task}</h1>
                        <button onClick={() => removeTask(task.id)}>Delete</button>
                    </div>

                ))
            }
        </div>
    );
};

export default TaskList;