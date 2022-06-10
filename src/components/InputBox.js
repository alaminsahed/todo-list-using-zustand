import React, { useState } from 'react';
import useStore from '../store';


const InputBox = () => {
    const [input, setInput] = useState('');

    const addTask = useStore(state => state.addTask);

    const taskSubmitHandler = () => {
        console.log(input);
        addTask({
            id: Date.now(),
            task: input,
        })
        setInput('');
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => taskSubmitHandler()}>Add</button>

        </div>
    );
};

export default InputBox;