import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/userSlice'


const AddUser = () => {
  const [value, setValue] = useState<any>()
  const dispatch = useDispatch();


  const onSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    dispatch(addUser({name}))
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
    <button type='submit'>Submit</button></form>
  )
}

export default AddUser