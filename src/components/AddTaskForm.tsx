import { useState } from 'react';
import { useTaskStore } from '../store/tashStore';


export const AddTaskForm = () => {
  const [input, setInput] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='group'>
      <input
        type="text"
        className='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button className='add-btn' type="submit">Add</button>
    </form>
  );
};