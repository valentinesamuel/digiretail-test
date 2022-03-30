
import { IUser } from "../redux/userSlice"
import User from "./User"

type Props = {
      listOfUser: IUser[]
}


const UserList: React.FC<Props> = ({ listOfUser }) => {
      

      const newStorage:any = localStorage
            newStorage.setItem("userList", JSON.stringify(listOfUser))


      return (
            <div className="user-list">

                  {listOfUser.map((user: any) => (
                        <User key={user.id} userDetail={user} />
                  ))}
            </div>
      )
}

export default UserList