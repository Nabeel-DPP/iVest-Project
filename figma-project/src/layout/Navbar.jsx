import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const theme = useTheme();
  const isMobilePortrait = useMediaQuery('(max-width: 600px) and (orientation: portrait)');
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
///These are the Drawer Items that will display on Navbar Collapse
  const drawerItems = (
    <List>
      <ListItem component={Link} to="/">
        <ListItemText primary="home" />
      </ListItem>
      <ListItem  component={Link} to="/about-us">
        <ListItemText primary="about Us" />
      </ListItem>
      <ListItem  component={Link} to="/membership-club">
        <ListItemText primary="Membership Club" />
      </ListItem>
      <ListItem  component={Link} to="/blogs">
        <ListItemText primary="Blogs" />
      </ListItem>
      <ListItem  component={Link} to="/contact-us">
        <ListItemText primary="Contact Us" />
      </ListItem>
      <ListItem >
        <i className="fa-solid fa-magnifying-glass"></i>
      </ListItem>
      <ListItem  component={Link} to="/login">
        <ListItemText primary="Log In" />
      </ListItem>
      <ListItem  component={Link} to="/register">
        <ListItemText primary="Register" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-around toolBar">
          <div className="logo">
            <Link to="/">
              <img src="/src/layout/Logo.png" alt="Logo" />
            </Link>
          </div>
          {isMobilePortrait && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          {!isMobilePortrait && (
            <div className="navbar-items">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/membership-club">Membership Club</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="register" to="/register"   
                     >Register</Link>
                </li>
              </ul>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {drawerItems}
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;


