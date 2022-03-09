import React, { useState } from "react";
import { Button, Grid, Input, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AuthSignUp } from "../../redux/auth/AuthAction";

const formValue = {
  name: "",
  password: "",
};

export default function LoginForm() {
  const [fVal, setFVal] = useState(formValue);

  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();

  const ChangeHandler = (e) => {
    let temp = { ...fVal };
    temp[e.target.name] = e.target.value;
    setFVal(temp);
  };

  const HandelSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthSignUp("abc"));
    console.log("hello", fVal, loggedIn);
  };

  return (
    <Paper
      component="form"
      elevation={12}
      onSubmit={HandelSubmit}
      sx={{ p: "25px", borderRadius: "20px" }}
    >
      <Typography
        variant="h5"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Login Form
      </Typography>
      <Input
        fullWidth
        type="email"
        name="name"
        value={fVal.name}
        onChange={ChangeHandler}
        placeholder="Enter Your Email"
        sx={{ pt: "30px" }}
        required
      />
      <Input
        fullWidth
        type="password"
        name="password"
        placeholder="Enter Your Password"
        value={fVal.password}
        onChange={ChangeHandler}
        sx={{ pt: "20px" }}
        required
      />
      <Grid sx={{ pt: "15px" }}>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            textAlign: "right",
            pr: "20px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Forget Password ?
        </Typography>
      </Grid>
      <Grid sx={{ pt: "30px", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ minWidth: "120px" }}
        >
          Login
        </Button>
      </Grid>
    </Paper>
  );
}
