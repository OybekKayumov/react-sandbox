import React, {useState} from 'react'

function CustomHookExample2() {
  const [task, setTask] = useState('')

  return (
    <div>
      <h5 className='mt-4 text-primary'>CustomHookExample2</h5>

      <form className='w-25'>
        <div className='mb-3'>
          <label htmlFor="" className='form-label'>Task</label>
          <input 
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