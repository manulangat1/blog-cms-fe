import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@mui/material";

interface StateI {
  email: string;
  password: string;
}
const SignIn = () => {
  const [state, setState] = useState<any>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const handleSubmit = () => {
    console.log(state);
  };
  return (
    <Container
      style={{
        display: "grid",
      }}
    >
      <section
        style={{ display: "grid", alignItems: "center", marginTop: "5rem" }}
      >
        <Typography
          variant="h6"
          style={{
            justifyContent: "center",
            alignSelf: "center",
            textAlign: "center",
            padding: "4rem",
          }}
        >
          Login in
        </Typography>

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
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              style={{
                padding: "0.7rem",
              }}
              value={state.email}
              id="my-input"
              name="email"
              onChange={handleChange}
              aria-describedby="my-helper-text"
            />
          </FormControl>

          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <FormControl variant="outlined" style={{ marginTop: "4rem" }}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              style={{
                padding: "0.7rem",
              }}
              value={state.password}
              id="password"
              name="password"
              onChange={handleChange}
              aria-describedby="my-helper-text"
              type="password"
            />
          </FormControl>
        </form>
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{
            width: "50%",
            margin: "auto",
            padding: "1.2rem",
            marginTop: "5rem",
          }}
        >
          {" "}
          Login
        </Button>
      </section>
    </Container>
  );
};

export default SignIn;
