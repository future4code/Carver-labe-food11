import { useState } from "react";

const UseForm = (initialState) => {

  const [form, setForm] = useState(initialState)

  const handleInputChange = (event, changer) => {
    const { value, name } = event.target
    if (changer) {
      const formatedValue = changer(value)
      setForm({ ...form, [name]: formatedValue })
    } else {

      setForm({ ...form, [name]: value })
    }
  }

  const clear = () => {
    setForm(initialState)
  }

  return [form, handleInputChange, clear]
}

export default UseForm
