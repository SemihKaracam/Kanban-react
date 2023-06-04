import React from 'react'
import Task from './Task'

const Column = ({title,tasks}) => {
  let colorClass = title=="Open" ? 'bg-open' : title=="On Hold" ? 'bg-onHold' : title=="In Progress" ? 'bg-inProgress' : "bg-completed" 
  return (
    <div className='p-[12px] h-[80%] bg-transparent border-dashed border-[2px] rounded-[5px] border-white flex-[1] overflow-y-scroll'>
        <div className='bg-white flex justify-between py-2 px-4 rounded-sm'>
            <h4>{title}</h4>
            <div className={`${colorClass} text-white flex items-center justify-center p-2 w-[24px] h-[24px]`}>{tasks.length}</div>
        </div>
        <div className='task-list'>
          {
            tasks.map((task,index)=>(
              <Task key={index} task={task}/>
            ))
          }
        </div>
    </div>
  )
}

export default Column