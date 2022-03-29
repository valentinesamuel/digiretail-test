import { useState, useEffect } from "react"
import AddUser from "../components/AddUser"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getUsersAsync, IUser } from "./userSlice"

const DataDisplayer = () => {
      const dispatch = useAppDispatch()
      const data:any = useAppSelector(state => state.users)
      const [dataPresent, setDataPresent] = useState<boolean>(false)

      useEffect(() => {
            if (!dataPresent) {
                  dispatch(getUsersAsync())
                  setDataPresent(true)
            }


      }, [dataPresent])

      const fetchData = () => {
            
            dispatch(getUsersAsync())
            console.log("dispatched ge us");

      }

      console.log(data);



      return (
            <>
                  {/* {data.user.map((user: IUser) => {
                        console.log(user);

                  })} */}
                  <AddUser />
                  <button onClick={fetchData}>Fetach DF</button>
            </>
      )
}
export default DataDisplayer