import { createSlice } from "@reduxjs/toolkit";

type userType= {
    id: number;
    name: string;
    email: string;
    token: string | null;
}

const initialState: userType = {
    id: 0,
    name: "",
    email: "",
    token: null,

}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      setUser: (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.token = action.payload.token;
    },
      clearUser: (state) => {
        state.email = "";
        state.name = "";
        state.id = 0;
        state.token = null;
      },
    },
  });
  
  export const { setUser, clearUser } = userSlice.actions;