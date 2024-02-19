import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import {
  getPostDetail,
  getPosts,
  UpdateSlice,
} from "../../../features/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

interface Istate {
  id: string;
  title: string;
  content: string;
}

const EditPost = () => {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      dispatch(getPostDetail(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { post } = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    return (
      post &&
      setState({ id: post?.id, title: post?.title, content: post.content })
    );
  }, [post]);
  console.log(params, post && post.body);
  function handleEditorChange({ html, text }: any) {
    // console.log("handleEditorChange", html, text);
    // const { content } = state;
    setState({ ...state, content: text });
    console.log(state);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<Istate>({
    id: "",
    title: "",
    content: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("here");

    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const sendData = async (file: any) => {
    const data = new FormData();
    data.append("files", file);
    const req = await axios.post(
      "http://blog-cms-tech-writing2-dev.us-west-1.elasticbeanstalk.com/blog/v1/upload/",
      data
    );
    console.log(req.data);
    return req.data;
  };
  // const imageUpload = async (file:any) => {
  //   console.log("file", file)

  //   return new Promise(async resolve => {

  //     const f = await sendData(file)

  //     console.log(f && f.data[0][1],'allla', f && f.data[1][0])
  //     const url = f.data[0]
  //     console.log(url, 'my url')
  //     const text = "hey"
  //     console.log(text,'my text')
  //     resolve( `${url}`.toString())
  //   }
  //   );
  // };
  const imageUpload = async (file: any) => {
    console.log("file", file);

    return new Promise(async (resolve) => {
      const f = await sendData(file);

      // console.log(f && f.data[0][1],'allla', f && f.data[1][0])
      const url = f.data;
      console.log(url, "my url");
      const text = "hey";
      console.log(text, "my text");
      resolve(`${url}`.toString());
    });
  };
  const handleSubmit = async () => {
    await dispatch(UpdateSlice(state));
    await dispatch(getPosts());
    await navigate("/");
    setState({ id: "", title: "", content: "" });
  };
  return (
    <Box
      style={{
        backgroundColor: "#88BDBC",
        height: "100vh",
      }}
    >
      <section
        style={{
          display: "grid",
          alignItems: "center",
          // marginTop: "5rem",
          backgroundColor: "#88BDBC",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "5rem",
            padding: "1rem",
            display: "grid",
            width: "50%",
            margin: "auto",
          }}
        >
          <FormControl variant="filled">
            <InputLabel htmlFor="my-input">Text</InputLabel>
            <Input
              style={{
                padding: "0.7rem",
              }}
              value={state.title}
              id="my-input"
              name="title"
              onChange={handleChange}
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <MdEditor
            name="content"
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
            onImageUpload={imageUpload}
            value={state.content}
          />
        </form>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={state.content === "" ? true : false}
          style={{
            width: "50%",
            margin: "auto",
            padding: "1.2rem",
            marginTop: "5rem",
            color: "#112d32",
          }}
        >
          {" "}
          Update Content
        </Button>
      </section>
    </Box>
  );
};

export default EditPost;
