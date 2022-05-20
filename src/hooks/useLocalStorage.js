import React from 'react'
import { useState } from 'react'

function useLocalStorage() {
  const [localStorageValue, setLocalStorageValue] = useState()

  const setValue = (value) => {
    console.log(value);
  }

  return [localStorageValue, setValue]
}

export default useLocalStorage