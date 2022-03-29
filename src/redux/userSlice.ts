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
            {
                  id: " 1",
                  name: "Valentine",
                  username: "@Valrenic2",
                  email: "valentinesamuel080@gmail.com", 
                  phone: "2536326234",
                  website: "valentinesamuel.vercel.app",

            },
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
                  state.user.push(newUser)
            },
            deleteUser: (state, action) => {
                  state.user.filter((user) => user.id !== action.payload.id)
            }
      },
      extraReducers:(builder)=>{
            builder.addCase(getUsersAsync.fulfilled, (state, action) => {
                  state.user.push(...state.user, ...action.payload?.users)
            //      return action.payload?.users
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