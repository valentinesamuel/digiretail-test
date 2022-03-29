import React from 'react'
import { useDispatch } from 'react-redux'
import { IUser } from '../redux/userSlice'
import { deleteUser } from '../redux/userSlice'

type Props = {
  userDetail: IUser
}

const User: React.FC<Props> = ({ userDetail }) => {
  const dispatch = useDispatch();
  console.log(userDetail);

  const handleDeleteUser = () => {
    dispatch(deleteUser({ id: userDetail.id }))
  }

  return (
    <span>
      <h1>{userDetail.name}</h1>
      <button onClick={handleDeleteUser}>delete</button>
    </span>
  )
}

export default User