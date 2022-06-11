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
                        <div className='card mt-5 text-center shadow p-3 mb-5 bg-body rounded' style={{ width: "50%", marginLeft: "3rem" }}>
                            <h1>{task.task}</h1>
                            <button onClick={() => removeTask(task.id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default TaskList;