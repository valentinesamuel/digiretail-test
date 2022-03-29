import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface IUser {
      id?: string
      name?: string
      username?: string
      email?: string
      phone?: string
      website?: string

}

export type UserState = {
      user: IUser[]
}

const initialState: UserState = {
      user: [
            // {
            //       id: " 1",
            //       name: "Valentine",
            //       username: "@Valrenic2",
            //       email: "valentinesamuel080@gmail.com", 
            //       phone: "2536326234",
            //       website: "valentinesamuel.vercel.app",

            // },
      ]
}

export const getUsersAsync = createAsyncThunk('async/getUsersAsync', async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (response.ok) {
            const users = await response.json()
            return { users }
      }
})


const userSlice = createSlice({
      name: 'users',
      initialState,
      reducers: {
            addUser: (state, action) => {
                  const newUser: IUser = {
                        id: nanoid(),
                        email: action.payload.email,
                        name: action.payload.name,
                        phone: action.payload.phone,
                        username: action.payload.username,
                        website: action.payload.username,
                  }
                  const storedData: any = localStorage.getItem("userList")
                  let localStore = JSON.parse(storedData)
                  // localStore:[].push({...newUser},storedData)
                  // localStorage.setItem("userList", JSON.stringify(localStore))
                  state.user.push(newUser)
                  localStorage.setItem("userList", JSON.stringify({ ...state.user }))

            },
            deleteUser: (state, action) => {
                  state.user.filter(user => user.id !== action.payload.id
                  )

            }

      },
      extraReducers: (builder) => {
            builder.addCase(getUsersAsync.fulfilled, (state, action) => {
                  state.user.push(...action.payload?.users)
                  // check if the local storage is empty. if empty, do this
                  if (localStorage === null) {
                        localStorage.setItem("userList", JSON.stringify({ user: action.payload?.users }))
                              alert("empty!")
                  } else {
                        alert("not mmpty")
                        //if the local storage is not empty
                        const storedData: any = localStorage.getItem("userList")
                        let localStore: UserState = JSON.parse(storedData)
                        // localStore.user.push()
                        state.user = []
                        state.user.push(...localStore.user)
                        console.log(localStore);
                  }






            })
            builder.addCase(getUsersAsync.pending, (state, action) => {
                  console.log("Fetaching data");

            })
            builder.addCase(getUsersAsync.rejected, (state, action) => {
                  console.log("You are offline or serve is down!");

            })
      }
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer