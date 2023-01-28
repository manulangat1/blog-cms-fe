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
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
