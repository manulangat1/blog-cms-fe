import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { getPostDetail } from "../../../features/posts/postSlice";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

import "./post.css";

import rehypeRaw from "rehype-raw";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      dispatch(getPostDetail(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { post } = useSelector((state: RootState) => state.posts);

  return (
    <main
      style={{
        backgroundColor: "#88BDBC",
        //   height: "100vh"
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post ? post.title : "Emmanuel Langat Blog"}</title>
        <link
          rel="canonical"
          // eslint-disable-next-line no-template-curly-in-string
          href="https://blog.kipchirchirlangat.com/ + ${post.slug}"
        />
      </Helmet>
      <section
        style={{
          backgroundColor: "#88BDBC",
          minHeight: "100vh",
          width: "60%",
          margin: "auto",
          padding: "2rem",
          //   marginTop: "2rem",
        }}
      >
        <Typography> {post && post?.title} </Typography>
        <ReactMarkdown
          // remarkPlugins={[gfm]}
          remarkPlugins={[[gfm, { singleTilde: false }]]}
          rehypePlugins={[rehypeRaw]}
          children={post.content}
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
        />
      </section>
      {/* </Box> */}
    </main>
  );
};

export default PostDetail;
