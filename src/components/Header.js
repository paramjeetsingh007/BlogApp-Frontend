import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  // Global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State
  const [value, setValue] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Theme & Responsive Check
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Logout function
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {}
  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#1b263b" }}>
        <Toolbar>
          {/* Logo with flexGrow to push elements to the right */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              flexGrow: 1, // Pushes drawer icon to the right
            }}
          >
            Blogs
          </Typography>

          {/* Desktop Navigation (Hidden in Mobile) */}
          {!isMobile && isLogin && (
            <Box display="flex" marginLeft="auto" marginRight="auto">
              <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                <Tab label="Blogs" component={Link} to="/blogs" />
                <Tab label="My Blogs" component={Link} to="/my-blogs" />
                <Tab label="Create Blog" component={Link} to="/create-blog" />
              </Tabs>
            </Box>
          )}

          {/* Desktop Login/Logout Buttons */}
          {!isMobile && (
            <Box display="flex" marginLeft="auto">
              {!isLogin ? (
                <>
                  <Button sx={{ margin: 1, color: "white" }} component={Link} to="/login">
                    Login
                  </Button>
                  <Button sx={{ margin: 1, color: "white" }} component={Link} to="/register">
                    Register
                  </Button>
                </>
              ) : (
                <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                  Logout
                </Button>
              )}
            </Box>
          )}

          {/* Mobile Navigation (Hamburger Menu) */}
          {isMobile && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ marginLeft: "auto" }} // Adds space between logo and drawer
              >
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ width: 250 }}>
                  {isLogin && (
                    <>
                      <ListItem button component={Link} to="/blogs" onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary="Blogs" />
                      </ListItem>
                      <ListItem button component={Link} to="/my-blogs" onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary="My Blogs" />
                      </ListItem>
                      <ListItem button component={Link} to="/create-blog" onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary="Create Blog" />
                      </ListItem>
                    </>
                  )}

                  {!isLogin ? (
                    <>
                      <ListItem button component={Link} to="/login" onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary="Login" />
                      </ListItem>
                      <ListItem button component={Link} to="/register" onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary="Register" />
                      </ListItem>
                    </>
                  ) : (
                    <ListItem button onClick={handleLogout}>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  )}
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
