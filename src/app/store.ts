import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import authReducer from "../features/auth/authSlice";
const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
