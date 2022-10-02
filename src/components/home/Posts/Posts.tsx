import React from "react";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        hh
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const posts = [
  {
    id: 1,
    title: "title",
    content: "content",
  },
  {
    id: 2,
    title: "title",
    content: "content",
  },
];

function Posts() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {posts.map((post) => (
          <Card variant="outlined">{card}</Card>
        ))}
      </Stack>
    </Box>
  );
}

export default Posts;
