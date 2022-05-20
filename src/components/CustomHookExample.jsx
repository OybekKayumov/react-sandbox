import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHookExample() {
  // const response = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  // destructuring
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  // console.log(response);

  if (loading) {
    return <h3>Loading...</h3>
  }
    
  return (
    
    <div>
      <h5 className='mt-4 text-danger'>CustomHookExample</h5>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample