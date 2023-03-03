import React, { useState } from 'react';
import useStore from '../store';

const InputBox = () => {
  const [input, setInput] = useState('');

  const addTask = useStore((state) => state.addTask);

  const taskSubmitHandler = () => {
    console.log(input);
    addTask({
      id: Date.now(),
      task: input,
    });
    setInput('');
  };

  return (
    <div className=' d-flex justify-content-center mt-5'>
      <div>
        <input
          type='text'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder='Add Your Task'
          className='border border-2 rounded rounded-1 border-dark p-1'
        />
      </div>

      <div className='ms-3'>
        <button onClick={() => taskSubmitHandler()} className='btn btn-info'>
          Add
        </button>
        <p>Test CI/CD! ow it working. Abcdef</p>
      </div>
    </div>
  );
};

export default InputBox;
