import React, { useState, useEffect } from 'react'

function useFetch(url, options) {
  const [loadin, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch()
      } catch (error) {

      }
    }
  })
}

export default useFetch