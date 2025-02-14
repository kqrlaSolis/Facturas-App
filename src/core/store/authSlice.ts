import { configureStore, createSlice } from "@reduxjs/toolkit";

type userType= {
    id: number;
    name: string;
    email: string;
}

const initialState: userType = {
    id: 0,
    name: "",
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      setUser: (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.id = action.payload.id;
    },
      clearUser: (state) => {
        state.email = "";
        state.name = "";
        state.id = 0;
      },
    },
  });
  
  export const { setUser, clearUser } = userSlice.actions;