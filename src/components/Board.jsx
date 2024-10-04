import React, {useState} from 'react';

const Board = ({task, index, taskList, setTaskList}) => {

  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
  }

  return (
    <>
    <div className='bg-[#d0fffe5e] py-5 px-5 decoration-transparent my-2 list-none flex flex-row justify-between align-center gap-10 text-xl'>
    <span className='text-left'>
      {task}
    </span>
    <span><button className='bg-[#0b00097b] px-2 py-1 rounded-lg transition-all delay-100 ease-in-out hover:bg-white hover:text-black text-gray-100' onClick={handleDelete}>Delete</button></span>
    </div>
    </>
  )
}

export default Board