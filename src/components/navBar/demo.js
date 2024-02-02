import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { appTheme } from "../Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import "./navBar.css";
import Link from "../../components/Link";




const pages = ['ABOUT', 'SERVICES', 'GET INVOLVED', 'DONATE', 'CONTACT'];
// const about = ['About BiGAUSTIN', 'Our Impact', 'Our Team'];
const about = [
    { label: 'Who we are', url: '/about' },
    { label: 'Our Impact', url: '/our-impact' },
    { label: 'Dream Team', url: '/our-team' },
    { label: 'Partnership', url: '/partnership' },
];

const help = [
    { label: 'Services', url: '/about' },
    { label: 'Programs', url: '/our-impact' },
    { label: 'Workshops', url: '/our-team' },
];

const involved = ['Volunteer', 'Partner', 'Contact Us'];



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    let [isOverButton, setIsOverButton] = useState(false);
    let [isOverList, setIsOverList] = useState(false);
    let [isOpen, setIsOpen] = useState();
    let [isTouchInput, setIsTouchInput] = useState();
    let [hasClicked, setHasClicked] = useState();
    let button = useRef(null);

    useLayoutEffect(() => {
        if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
          button.current.click();
          setIsOpen(false);
        } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
          button.current.click();
          setIsOpen(true);
        }
      }, [isOverButton, isOverList]);
    
      useEffect(() => {
        setIsTouchInput(false);
        setHasClicked(false);
      }, [hasClicked]);





    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElAbout, setAnchorElAbout] = React.useState(null);
    const [anchorElHelp, setAnchorElHelp] = React.useState(null);



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenAboutMenu = (event) => {
        setAnchorElAbout(event.currentTarget);
    };
    const handleOpenHelpMenu = (event) => {
        setAnchorElHelp(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseAboutMenu = () => {
        setAnchorElAbout(null);
    };
    const handleCloseHelpMenu = (event) => {
        setAnchorElHelp(null);
    };



    const handleAboutMouseEnter = (event) => {
        handleOpenAboutMenu(event);
    };
    const handleAboutMouseLeave = () => {
        handleCloseAboutMenu();
    };
    const handleHelpMouseEnter = (event) => {
        handleOpenHelpMenu(event);
    };
    const handleHelpMouseLeave = () => {
        handleCloseHelpMenu();
    };



    return (
        <ThemeProvider theme={appTheme}>
            <AppBar position="static" elevation={0}  sx={{ backgroundColor: 'transparent' }}>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <div className="logo">
                            <Link to="/">
                                <img
                                    alt={"logo"}
                                    src={require('../images/bigaustinlogo.png')}
                                />
                            </Link>
                        </div>




                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}

                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>





                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip>
                                    <Button
                                        // onClick={handleOpenAboutMenu}
                                        onMouseEnter={handleAboutMouseEnter}
                                        
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        ABOUT
                                    </Button>
                                </Tooltip>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElAbout}
                                    open={Boolean(anchorElAbout)}
                                    onClose={handleCloseAboutMenu}
                                    onMouseLeave={handleAboutMouseLeave}

                                >
                                    {about.map((item) => (
                                        <MenuItem key={item.label} onClick={handleCloseAboutMenu} >
                                            <Link href={item.url}>
                                                <Typography textAlign="center">{item.label}</Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>



                        </Box>



                    </Toolbar>
                </Container>
                
            </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;
