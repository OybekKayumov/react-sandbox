import React from 'react'
import { useState } from 'react'
import ToDo from './ToDo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      <h5>UseRefExample3</h5>
      {showTodo && <ToDo />}
      <button 
        className='btn btn-secondary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle ToDo
      </button>
    </div>
  )
}

export default UseRefExample3