import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { postsAPiService } from "./postsApiService";
import postsAPiService from "./postsApiService";
interface stateInterface {
  posts: any;
  post: any;
  isLoading: boolean;
  isError: boolean;
  message: any;
}
const initialState: stateInterface = {
  posts: [],
  post: {},
  isLoading: false,
  isError: false,
  message: "",
};

// get all posts
export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return postsAPiService.getPosts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPostDetail = createAsyncThunk(
  "posts/getPostDetail",
  async (id: string, thunkAPI) => {
    try {
      return postsAPiService.getPostById(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createPosts = createAsyncThunk(
  "posts/create",
  async (postData: any, thunkAPI) => {
    try {
      return postsAPiService.createPosts(postData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const publish = createAsyncThunk(
  "posts/publish",
  async (id: any, thunkAPI) => {
    try {
      return postsAPiService.publishContent(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const UpdateSlice = createAsyncThunk(
  "posts/update",
  async (postData: any, thunkAPI) => {
    try {
      return postsAPiService.UpdateByIdService(postData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPostDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostDetail.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPostDetail.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateSlice.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(publish.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createPosts.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
