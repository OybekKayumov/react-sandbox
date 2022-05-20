// import React, {useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
  // const [task, setTask] = useState('')
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault();

    // create an object
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }

  }

  return (
    <div>
      <h5 className='mt-4 text-primary'>CustomHookExample2</h5>

      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label htmlFor="" className='form-label'>Task</label>
          <input
            className='form-control' 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)} 
          />

          <button 
            type='submit' className='btn btn-outline-success mt-3'
          >
            Submit
          </button>

        </div>
      </form>
    </div>
  )
}

export default CustomHookExample2