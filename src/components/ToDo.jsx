import React from 'react'
import { useState, useEffect, useRef } from 'react'

function ToDo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  // const isMounted = useRef(true)

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/todos/11')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          // if (isMounted.current) {
            setTodo(data)
            setLoading(false)
          // }
        }, 3000)
      })

      // runs when component is unmounted
      // return () => {
      //   isMounted.current = false
      // }

  // }, [isMounted])
  }, [])

  return (
    loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
  )
}

export default ToDo