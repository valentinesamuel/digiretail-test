import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, IUser } from '../redux/userSlice'


const AddUser = () => {
  const [value, setValue] = useState<any>()
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  })


  const onSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    dispatch(addUser(user))
  }

  return (
    <div onSubmit={onSubmit}>
      <label htmlFor='name'>Name</label>
      <input type="text" id='name' onChange={(e) => setUser((prevUser) => ({ ...prevUser, name: e.target.value }))} />
      <br />
      <label htmlFor='username'>username</label>
      <input type="text" id='username' onChange={(e) => setUser((prevUsername) => ({ ...prevUsername, username: e.target.value }))} />
      <br />
      <label htmlFor='email'>email</label>
      <input type="text" id='email' onChange={(e) => setUser((prevEmail) => ({ ...prevEmail, email: e.target.value }))} />
      <br />
      <label htmlFor='website'>website</label>
      <input type="email" id='website' onChange={(e) => setUser((prevWebsite) => ({ ...prevWebsite, website: e.target.value }))} />
      <br />
      <label htmlFor='phone'>phone</label>
      <input type="tel" id='phone' onChange={(e) => setUser((prevPhone) => ({ ...prevPhone, phone: e.target.value }))} />
      <br />

      <button onClick={onSubmit}>Submit</button></div>
  )
}

export default AddUser