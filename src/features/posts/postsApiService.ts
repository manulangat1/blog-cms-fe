import axios from "axios";
const BASE_URL = "http://localhost:8000";
const getPosts = async () => {
  const token = localStorage.getItem("blog-cms-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const response = await axios.get(BASE_URL + "/blog/v1/posts/", config);
  console.log(response.data, "my res");
  return response.data;
};

const getPostById = async (id: string) => {
  const token = localStorage.getItem("blog-cms-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const response = await axios.get(BASE_URL + `/blog/v1/posts/${id}`, config);
  console.log(response.data, "my res");
  return response.data;
};

const UpdateByIdService = async (blog:any) => {
  const token = localStorage.getItem("blog-cms-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  // const data = JSON.stringify({blog})
  const response = await axios.patch(BASE_URL + `/blog/v1/posts/${blog.id}/update`, blog,config);
  console.log(response.data, "my res");
  return response.data;
};


const createPosts = async (postData: any) => {
  const token = localStorage.getItem("blog-cms-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const response = await axios.post(
    BASE_URL + "/blog/v1/posts/",
    postData,
    config
  );
  console.log(response.data, "my res");
  return response.data;
};

const publishContent = async (id: string) => {
  const token = localStorage.getItem("blog-cms-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const response = await axios.patch(
    BASE_URL + "/blog/v1/post/" + id + "/publish",
    config
  );
  console.log(response.data, "my res");
  return response.data;
};
const postsAPiService = { getPosts, createPosts, getPostById, publishContent , UpdateByIdService };
export default postsAPiService;
