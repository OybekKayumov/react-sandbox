import React from 'react'
import { useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))

  const setValue = (value) => {
    console.log(value);

    // check if function
    const valueToStore = value instanceof Function ? value(localStorageValue) : value

    // set to store
    setLocalStorageValue(value)

    // set to localStorage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}


function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage