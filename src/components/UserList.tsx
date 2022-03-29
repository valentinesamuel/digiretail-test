import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUsersAsync, IUser } from "../redux/userSlice"
import User from "./User"


const UserList = () => {
      const dispatch = useDispatch();
      const users = useSelector((state: any) => state.users)
      
      useEffect(() => {
        dispatch(getUsersAsync())
      
      }, [])
      
  return (
        <ul>
              {users.map((user:any) => (
                    <User userDetail={user}/>
              ))}
    </ul>
  )
}

export default UserList