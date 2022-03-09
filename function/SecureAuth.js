import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function SecureAuth(props) {
  const loggedIn = useSelector((s) => s.user.loggedIn);
  console.log(loggedIn);
  if (loggedIn) {
    console.log("secure route");
    return <>{props.children}</>;
  } else {
    console.log("unsecure route");
    return <Grid></Grid>;
  }
}

export default SecureAuth;
