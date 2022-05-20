import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [increment, setIncrement] = useState(0)

  // const sqrt = getSqrt(number)
  // ReRender button isn't in for loo[]
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  }, [])

  const onClick = () => {
    setIncrement((prevState) => {
      console.log(prevState + 1);
      return prevState + 1
    })
  }

  return (
    <div>
      <h5 className='mt-4 text-secondary'>UseMemoExample</h5>
      <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"  
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className='btn btn-success mt-2'>Re Render</button>
      <h3>Renders (from Memo): {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i=0; i<=10000; i++) {
    console.log(i);
  }

  console.log('Expensive Function Called');
  return Math.sqrt(n)
}

export default UseMemoExample