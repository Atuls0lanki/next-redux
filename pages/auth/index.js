import { Grid, Typography } from "@mui/material";
import React from "react";
import LoginForm from "../../components/auth/LoginForm";

function index({ custom }) {
  console.log(custom);
  return (
    <Grid>
      <Typography
        variant="h4"
        sx={{ color: "secondary.main", textAlign: "center", pt: "100px" }}
      >
        Welcome To Login Page
      </Typography>
      <Grid container sx={{ justifyContent: "center", pt: "50px" }}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default index;

index.getInitialProps = ({ pathname, query }) => ({
  custom: { p: pathname, q: query },
});
