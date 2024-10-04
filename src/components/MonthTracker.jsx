import { useState } from "react"
import MonthInput from "./MonthInput";
import Board from "./Board";

const YearTracker = () => {

   const [monthTask, setMonthTask] = useState(["Get this month's coding badge.",'Apply for atleast 20 job positions.', 'Get a haircut']);

  return (
    <div>
      <div className='flex justify-between align-center bg-[#0b176e96] p-3 rounded-t-md'>
      <MonthInput taskList = {monthTask} setTaskList = {setMonthTask}/>
      
      </div>

      <div>
        {monthTask.map((task, index) => 
          <Board 
          key={index}
          index={index}
          task={task}
          taskList={monthTask}
          setTaskList={setMonthTask}
          />
        )}
      </div>
    </div>
  )
}

export default YearTracker