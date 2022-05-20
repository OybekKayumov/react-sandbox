import React from 'react'
import { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }

   return (
    <div>
      <h5 className='mt-4 text-success'>UseCallbackExample</h5>
      <Button addTask={addTask}/>
    </div>
  )  
}

const Button = ({addTask}) => {
  console.log('Button rendered');

  return (
    <div>
      <button onClick={addTask} className='btn btn-outline-danger'>Add Task</button>
    </div>
  )
}

export default UseCallbackExample