import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, IUser } from '../redux/userSlice'


const AddUser = () => {
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
    <>
      <h1 className='intro'>Welcome Digiretail</h1>
      <div onSubmit={onSubmit} className="form">
        
          <div className="input">

            <label htmlFor='name' className='input-label'>Name</label>
            <input type="text" id='name' className='input-field' onChange={(e) => setUser((prevUser) => ({ ...prevUser, name: e.target.value }))} />
          </div>

          <div className="input">
            <label htmlFor='username' className='input-label'>username</label>
            <input type="text" id='username' className='input-field' onChange={(e) => setUser((prevUsername) => ({ ...prevUsername, username: e.target.value }))} />
          </div>
       
        
          <div className="input">
            <label htmlFor='email' className='input-label'>email</label>
            <input type="text" id='email' className='input-field' onChange={(e) => setUser((prevEmail) => ({ ...prevEmail, email: e.target.value }))} />
          </div>
          <div className="input">
            <label htmlFor='website' className='input-label'>website</label>
            <input type="email" id='website' className='input-field' onChange={(e) => setUser((prevWebsite) => ({ ...prevWebsite, website: e.target.value }))} />
          </div>
     
     
          <div className="input">

          <label htmlFor='phone' className='input-label'>phone</label>
          <input type="tel" id='phone' className='input-field' onChange={(e) => setUser((prevPhone) => ({ ...prevPhone, phone: e.target.value }))} />
         
         
        </div>

      </div>

      <button className='btn ' onClick={onSubmit}>Submit</button>
    </>
  )
}

export default AddUser