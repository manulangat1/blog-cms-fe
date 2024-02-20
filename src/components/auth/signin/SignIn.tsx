import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../../../features/auth/authSlice";
import { RootState, AppDispatch } from "../../../app/store";
import { redirect, useNavigate } from "react-router-dom";
interface StateI {
  email: string;
  password: string;
}

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isLoading, isError, isAuthenticated, message } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }
  }, [isAuthenticated]);

  const [state, setState] = useState<any>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await dispatch(
      loginUser({ username: state.email, password: state.password })
    );
    if (isAuthenticated) {
      navigate("/");
    }
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
        {isError && message && (
          <Typography
            variant="h6"
            style={{
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              padding: "4rem",
            }}
          >
            {message}
          </Typography>
        )}
        <Typography
          variant="h6"
          style={{
            justifyContent: "center",
            alignSelf: "center",
            textAlign: "center",
            padding: "4rem",
          }}
        >
          Login in to continue
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
            <InputLabel htmlFor="my-input">Password</InputLabel>
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
