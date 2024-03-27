import { ChangeEvent, useState } from "react"

function useInput<T = HTMLInputElement | HTMLTextAreaElement>(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  // const [error, setError] = useState(false)

  function handleChange(e: ChangeEvent<T>) {
    setValue(e.target.value)
  }

  return {
    value,
    // error,
    onChange: handleChange,
    // setError,
  }
}

export default useInput