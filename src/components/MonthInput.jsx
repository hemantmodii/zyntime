import React, { useState } from 'react'

const MonthInput = ({taskList, setTaskList}) => {

  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  }
  return (
    <div>
      <h1
      className='my-2 mx-auto font-extrabold text-4xl text-white mb-8'
      >Monthly Goals</h1>
      <form action="">
        <input 
        className='rounded-lg border px-2 mx-2 text-green'
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add your task'
        />
        <button 
        className='text-white'
        type="submit"
        onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default MonthInput