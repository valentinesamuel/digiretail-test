import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUsersAsync, IUser } from "../redux/userSlice"
import User from "./User"

type Props = {
      listOfUser: IUser[]
}


const UserList: React.FC<Props> = ({ listOfUser }) => {
      const dispatch = useDispatch();
      

      return (
            <div className="user-list">
                  {listOfUser.map((user: any) => (
                        <User key={user.id} userDetail={user} />
                  ))}
            </div>
      )
}

export default UserList