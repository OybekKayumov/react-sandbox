import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHookExample() {
  const response = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  console.log(response);
    
  return (
    
    <div>
      <h5 className='mt-4 text-danger'>CustomHookExample</h5>
    </div>
  )
}

export default CustomHookExample