import { useState, useEffect } from "react"
import AddUser from "../components/AddUser"
import UserList from "../components/UserList"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getUsersAsync } from "./userSlice"

const DataDisplayer = () => {
      const dispatch = useAppDispatch()
      const data: any = useAppSelector(state => state.users)
      const [dataPresent, setDataPresent] = useState<boolean>(false)
      const [searchTerm, setSearchTerm]: any = useState()



      useEffect(() => {
            if (!dataPresent) {
                  dispatch(getUsersAsync())
                  setDataPresent(true)

            }

      }, [dispatch, dataPresent])

      const fetchData = () => {
            dispatch(getUsersAsync())
            setDataPresent(true)
            console.log("dispatched ge us");

      }


      let userList = useAppSelector(state => state.users)
     // const [userlist, setUserList] = useState(useAppSelector(state => state.users))

      const handleSearch = (e: any) => {

            const findUsers = userList.user && userList.user.length > 0 ? userList.user.filter((u) => u.name === searchTerm) : undefined
            console.log(findUsers);


            // Typescript does not allow me set the usserList to the list of users i filtered but i can see the list(findUsers) in the console
            // setUserList(findUsers)
      }


      return (
            <>
                  <AddUser />
                  <button className="btn" onClick={fetchData}>Fetch Users</button>
                  <div className="search">
                        <label className="input-label">Seach Users Here</label>
                        <input className="input-field" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search.." />
                        <button className="btn search-btn" onClick={handleSearch}>Search</button>
                  </div>
                  <div className="result-user">
                        {/* The filtered list should go here */}
                  </div>
                  <UserList listOfUser={data.user} />
            </>
      )
}
export default DataDisplayer