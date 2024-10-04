import { useState } from "react"
import Input from "./Input";
import Board from "./Board";

const YearTracker = () => {

   const [yearTask, setYearTask] = useState(['For ex- Get a job.','Get jacked.', 'Get marrried.']);

  return (
    <div>
      <div className='flex justify-between align-center bg-[#0b00096a] p-3 rounded-t-md mt-8'>
      <Input taskList = {yearTask} setTaskList = {setYearTask}/>
      
      </div>

      <div>
        {yearTask.map((task, index) => 
          <Board 
          key={index}
          index={index}
          task={task}
          taskList={yearTask}
          setTaskList={setYearTask}
          />
        )}
      </div>
    </div>
  )
}

export default YearTracker