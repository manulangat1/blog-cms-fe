import React, { useEffect } from "react";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, publish } from "../../../features/posts/postSlice";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppDispatch, RootState } from "../../../app/store";
import CircularProgress from "@mui/material/CircularProgress";
// import CreatePost from "./CreatePost";
import { CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
// import rehypeRaw from "rehype-raw";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// import ReactMarkdown from "react-markdown";
// // import remarkGfm from "remark-gfm";
// import gfm from "remark-gfm";

function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { posts, isLoading } = useSelector((state: RootState) => state.posts);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getPosts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  // const limitChar = (content: string) => {
  //   return content.substring(0, 200) + "...";
  // };
  const onClickRedirect = (id: string) => {
    return navigate(`/post/${id}`);
  };
  const onEditRedirect = (id: string) => {
    return navigate(`/edit/${id}`);
  };
  const onPublish = (id: string) => {
    dispatch(publish(id));
  };
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {isLoading && <CircularProgress color="success" />}
      {/* <CreatePost /> */}
      <Grid
        container
        style={{ width: "90%", margin: "auto", padding: "1rem" }}
        spacing={6}
      >
        {posts.length > 0 &&
          posts?.map((post: any) => (
            <Grid
              // style={{
              //   background: "#2b7a78",
              // }}
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              key={post.id}
            >
              <Card
                style={{
                  background: "#2b7a78",
                  height: "500px",
                  width: "100%",
                }}
                key={post.id}
                variant="outlined"
              >
                <CardMedia
                  component="img"
                  height="160"
                  // width="auto"
                  image="https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {post.title}
                  </Typography>
                  {/* <Typography variant="body2"> */}
                  {/* {limitChar(post.content)} */}
                  {/* <ReactMarkdown
                      remarkPlugins={[[gfm, { singleTilde: false }]]}
                      rehypePlugins={[rehypeRaw]}
                      children={limitChar(post.content)}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, "")}
                              style={materialDark}
                              language={match[1]}
                              PreTag="div"
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    /> */}
                  {/* </Typography> */}
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => onClickRedirect(post.id)}
                    style={{
                      backgroundColor: "#88BDBC",
                    }}
                    variant="contained"
                    size="small"
                  >
                    See more
                  </Button>
                  <Button
                    onClick={() => onEditRedirect(post.id)}
                    style={{
                      backgroundColor: "#88BDBC",
                    }}
                    variant="contained"
                    size="small"
                  >
                    Edit
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#88BDBC",
                    }}
                    size="small"
                    // eslint-disable-next-line no-restricted-globals
                    onClick={() => onPublish(post.id)}
                  >
                    Publish
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Posts;
