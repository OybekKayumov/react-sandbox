import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

   return (
    <div>
      <h5 className='mt-4 text-success'>UseCallbackExample</h5>
      <Button addTask={addTask}/>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )  
}

const Button = React.memo(({addTask}) => {
  console.log('Button rendered');

  return (
    <div>
      <button onClick={addTask} className='btn btn-outline-danger'>Add Task</button>
    </div>
  )
})

export default UseCallbackExample
