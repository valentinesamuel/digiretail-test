import { useState, useEffect } from "react"
import AddUser from "../components/AddUser"
import UserList from "../components/UserList"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getUsersAsync } from "./userSlice"

const DataDisplayer = () => {
      const dispatch = useAppDispatch()
      const data: any = useAppSelector(state => state.users)
      const [dataPresent, setDataPresent] = useState<boolean>(false)

      useEffect(() => {
            if (!dataPresent) {
                  dispatch(getUsersAsync())
                  setDataPresent(true)
                 
            }

      }, [])

      const fetchData = () => {
            dispatch(getUsersAsync())
            setDataPresent(true)
            console.log("dispatched ge us");

      }



      return (
            <>
                  <AddUser />
                  <button className="btn" onClick={fetchData}>Fetch Users</button>
                  <UserList listOfUser={data.user} />
            </>
      )
}
export default DataDisplayer