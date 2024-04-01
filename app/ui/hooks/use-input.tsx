import { ChangeEvent, useState } from "react"

function useInput<T extends (HTMLInputElement | HTMLTextAreaElement)>(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  // const [error, setError] = useState(false)

  function handleChange(e: ChangeEvent<T>): void {
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