import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
  footer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.shape.borderRadius,
  },
}));

const items = [
  { label: "Home", key: "1" },
  { label: "Groups", key: "2" },
];

const MyLayout = (props) => {
  const { children } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const handleMenuClick = (item) => {
    if (item.key === "1") {
      navigate("/");
    }
    if (item.key === "2") {
      navigate("/groups");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Your Logo
          </Typography>
          <Button
            color="inherit"
            onClick={() => handleMenuClick({ key: "1" })}
            disabled={isLandingPage}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => handleMenuClick({ key: "2" })}
            disabled={!isLandingPage}
          >
            Groups
          </Button>
        </Toolbar>
      </AppBar>

      <Box className={classes.content}>{children}</Box>

      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          Material-UI ©{new Date().getFullYear()} Created by Your Team
        </Typography>
      </footer>
    </div>
  );
};

export default MyLayout;
