import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setLogout } from "../../state";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome!
          </Typography>
          <Button color="inherit" onClick={() => dispatch(setLogout())}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
