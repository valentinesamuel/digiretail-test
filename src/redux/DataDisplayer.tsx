import { useState, useEffect } from "react"
import AddUser from "../components/AddUser"
import User from "../components/User"
import UserList from "../components/UserList"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getUsersAsync, IUser } from "./userSlice"

const DataDisplayer = () => {
      const dispatch = useAppDispatch()
      const data: any = useAppSelector(state => state.users)
      const [dataPresent, setDataPresent] = useState<boolean>(false)
      const [retrivedState, setRetrivedState] = useState([])

      useEffect(() => {
            if (!dataPresent) {
                  dispatch(getUsersAsync())
                  setDataPresent(true)
            } else {
                  const localState: any = localStorage.getItem("userList")
                  setRetrivedState(JSON.parse(localState))
                  console.log(retrivedState);

            }

      }, [])

      const fetchData = () => {

            dispatch(getUsersAsync())
            console.log("dispatched ge us");

      }

      // console.log(data.user);



      return (
            <div>
                  <AddUser />
                  <button onClick={fetchData}>Fetach DF</button>
                  <UserList listOfUser={data.user} />
            </div>
      )
}
export default DataDisplayer