import React from 'react'
import { useDispatch } from 'react-redux'
import { IUser } from '../redux/userSlice'
import { deleteUser } from '../redux/userSlice'

type Props = {
  userDetail: IUser
}

const User: React.FC<Props> = ({ userDetail }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUser({ id: userDetail }))
    console.log(userDetail.id);

  }

  return (
    <div className='card'>
      <h1 className='name'>{userDetail.name}</h1>
      <p className='email'>{userDetail.email}</p>
      <p className='website'>{userDetail.website}</p>

      <p className='phone'>{userDetail.phone}</p>
      <p className='username'>{userDetail.username}</p>
      {/* <button onClick={handleDeleteUser}>delete</button> */}
    </div>
  )
}

export default User