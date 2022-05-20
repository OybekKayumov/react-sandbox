// import React, {useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
  // const [task, setTask] = useState('')
  const [task, setTask] = useLocalStorage('task', '')

  return (
    <div>
      <h5 className='mt-4 text-primary'>CustomHookExample2</h5>

      <form className='w-50'>
        <div className='mb-3'>
          <label htmlFor="" className='form-label'>Task</label>
          <input
            className='form-control' 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)} 
          />

        </div>
      </form>
    </div>
  )
}

export default CustomHookExample2