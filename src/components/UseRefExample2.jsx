import React from 'react'
import { useState, useEffect, useRef } from 'react'


function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')
  
  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h5 className='mt-4 text-danger'>UseRefExample2</h5>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name state: {prevName.current}</h2>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"  
      />
    </div>
  )
}

export default UseRefExample2