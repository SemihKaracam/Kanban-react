import { useState } from 'react'
import Column from './components/Column'
import data from "../data.json"

function App() {

  return (
    <div className='flex items-center justify-center bg-pink w-[100%] h-[100vh]'>
      <div className='column-list w-[92%] h-[90%] bg-lightGray flex items-end gap-4 py-6 px-6'>
        {
          data.map(({title,tasks},index)=>(
            <Column title={title} key={index} tasks={tasks} />
          ))
        }
      </div>
    </div>
  )
}

export default App
