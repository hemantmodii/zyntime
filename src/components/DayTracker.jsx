import { useState } from "react"
import DayInput from "./DayInput";
import Board from "./Board";

const DayTracker = () => {

   const [dayTask, setDayTask] = useState(['Solve 3 DSA problems.','Hit the Gym.', 'Meditate for 10 minutes.']);

  return (
    <div>
      <div className='flex justify-between align-center bg-[#4f5aae6f] p-3 rounded-t-md mt-8'>
      <DayInput taskList = {dayTask} setTaskList = {setDayTask}/>
      
      </div>

      <div>
        {dayTask.map((task, index) => 
          <Board 
          key={index}
          index={index}
          task={task}
          taskList={dayTask}
          setTaskList={setDayTask}
          />
        )}
      </div>
    </div>
  )
}

export default DayTracker