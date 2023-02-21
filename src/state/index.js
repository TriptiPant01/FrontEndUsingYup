import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    updatedPosts: (state, action) => {
      console.log(action.payload);
      state.posts.push(action.payload);
    },
  },
});

export const { setMode, setLogin, setLogout, setPosts, updatedPosts } =
  authSlice.actions;
export default authSlice.reducer;
