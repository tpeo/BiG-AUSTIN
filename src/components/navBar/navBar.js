import React from "react";
import SiteNav, { ContentGroup } from "react-site-nav";
// import {
//   Switch,
//   Link,
//   Route,
//   BrowserRouter,
//   withRouter
// } from "react-router-dom";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';  // Import Link from your routing library


import MenuIcon from '@mui/icons-material/Menu';

import Link1 from "../../components/Link";
import { appTheme } from "../Theme.js";
import { ThemeProvider } from "@mui/material/styles";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import Route from "../../components/Route";

import "./navBar.css";

export default function NavBar() {
  const [showModal, setShowModal] = React.useState(false);
  const pages = ['ABOUT', 'SERVICES', 'GET INVOLVED', 'DONATE', 'CONTACT'];


  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);


  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };




  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={appTheme}>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#435058",
          height: "80px",
          width: "98%",
          left: 0,
          right: 0,
          margin: "10px auto", // Centering using margin: auto
          borderRadius: "10px",
        }}
      >
        <div className="container-fluid">
          <header>
            <div className="logo">
              <Link to="/">
                <img
                  alt={"logo"}
                  src={require('../images/bigaustinlogo.png')}
                />
              </Link>
            </div>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <div className="menubutton">
                <IconButton className="icon"
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </div>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

                <List
                  sx={{ width: 200, maxWidth: 500, bgcolor: "#435058", fontFamily: "League Spartan" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >

                  <ListItemButton onClick={handleClick1}>
                    <Link to="/about"  style={{ textDecoration: 'none' }}>
                      <ListItemText className="link" primary="About" />
                    </Link>
                    {open1 ? <ExpandLess /> : <ExpandMore />}

                  </ListItemButton>
                  <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Who we are" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/ourimpact" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Our Impact" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/dreamteam" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Dream Team" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/partnership" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Partnership" />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>


                  <ListItemButton onClick={handleClick2}>
                    <Link to="/services" style={{ textDecoration: 'none' }}>
                      <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Services" />
                    </Link>
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/lending" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Lending" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/programs" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Programs" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/workshops" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Workshops" />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>

                  <ListItemButton onClick={handleClick3}>
                    <ListItemText primary="Get Involved" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/volunteer" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Volunteer" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/partnership" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Partner" />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link to="/aspire" style={{ textDecoration: 'none' }}>
                          <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Aspire" />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>

                  <ListItemButton>
                    <Link to="/aspire" style={{ textDecoration: 'none' }}>
                      <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Aspire" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <Link to="/donate" style={{ textDecoration: 'none' }}>
                      <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Donate" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                      <ListItemText sx={{ fontFamily: "League Spartan" }} primary="Contact" />
                    </Link>
                  </ListItemButton>

                </List>


              </Menu>







              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>



            <SiteNav color="white" fontWeight="bold" rowHeight="100" background="transparent" align="right" fontFamily="League Spartan, sans-serif">
              <ContentGroup className="link-class" title={`ABOUT ▾`} width="170" height="125">
                <ul>
                  <li>
                    <Link1 href="/about">
                      Who we are
                    </Link1>
                  </li>
                  <li>
                    <Link1 href="/ourimpact">
                      Our Impact
                    </Link1>

                  </li>
                  <li>
                    {/* <Link to="/link-2">Our Team</Link> */}
                    <Link1 href="/dreamteam">
                      Dream Team
                    </Link1>
                  </li>
                  <li>
                    {/* <Link to="/link-2">Our Team</Link> */}
                    <Link1 href="/partnership">
                      Partnership
                    </Link1>
                  </li>
                </ul>
              </ContentGroup>
              <ContentGroup rootUrl="services" title="SERVICES ▾" width="170" height="240">
                <ul>
                  <li>
                    {/* <Link to="/link-2">Services</Link> */}
                    <Link1 href="/lending">
                      Lending
                    </Link1>
                  </li>
                  <li>
                    {/* <Link to="/link-2">Services</Link> */}
                    <Link1 href="/programs">
                      Programs
                    </Link1>
                  </li>

                  <li>
                    {/* <Link to="/link-2">Workshops</Link> */}
                    <Link1 href="/workshops">
                      Workshops
                    </Link1>
                  </li>
                </ul>
              </ContentGroup>
              <ContentGroup title="GET INVOLVED ▾" width="170" height="130">
                <ul>
                  <li>
                    {/* <Link to="/link-2">Volunteer</Link> */}
                    <Link1 href="/volunteer">
                      Volunteer
                    </Link1>
                  </li>
                  <li>
                    {/* <Link to="/link-2">Partner</Link> */}
                    <Link1 href="/partnership">
                      Partner
                    </Link1>
                  </li>
                  <li>
                    {/* <Link to="/link-2">Contact Us</Link> */}
                    <Link1 href="/aspire">
                      Aspire
                    </Link1>
                  </li>
                </ul>
              </ContentGroup>

              <ContentGroup fontFamily="League Spartan, sans-serif" title="CALENDAR" rootUrl="workshops" />
              <ContentGroup title="DONATE" rootUrl="donate" background="white" />

              <ContentGroup title="CONTACT" rootUrl="/contact" background="appTheme.palette.primary.white" />

            </SiteNav>
          </header>
        </div>
      </AppBar>
    </ThemeProvider>
  );
}
