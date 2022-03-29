import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface IUser {
      id?: string
      name?: string
      username?: string
      email?: string
      phone?: string
      website?: string
      company?: object
      address?: object
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
                  address: {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        geo: {
                              "lat": "-37.3159",
                              "lng": "81.1496"
                        }
                  },
                  phone: "2536326234",
                  website: "valentinesamuel.vercel.app",
                  company: {
                        name: "freelance",
                        catchPhrase: "Muf",
                        bs: "sdhgsrofm"
                  }
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
                        email: action.payload.email,
                        id: nanoid(),
                        name: action.payload.name,
                        phone: action.payload.phone,
                        username: action.payload.username,
                        website: action.payload.username,
                        address: {
                              street: action.payload.address.street,
                              suite: action.payload.address.suite,
                              city: action.payload.address.city,
                              zipcode: action.payload.address.zipcode,
                              geo: {
                                    lat: action.payload.address.geo.lat,
                                    lng: action.payload.address.geo.lng
                              }
                        },
                        company: {
                              name: action.payload.company.name,
                              catchPhrase: action.payload.company.catchPhrase,
                              bs: action.payload.company.bs,
                        }

                  }
                  state.user.push(newUser)
            },
            deleteUser: (state, action) => {
                  state.user.filter((user) => user.id !== action.payload.id)
            }
      },
      extraReducers:(builder)=>{
            builder.addCase(getUsersAsync.fulfilled, (state, action) => {
                 return action.payload?.users
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