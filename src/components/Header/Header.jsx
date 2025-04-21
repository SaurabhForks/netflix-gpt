import React from "react";
import classes from "./Header.module.scss";
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
import { Logo } from "../../assets/images/images";
import { Link, useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useSelector } from 'react-redux'
import { PAGES } from "../../utils/constants";
const Header = () => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettingsClick = (setting) => {
    if (setting === 'Logout') {
      signOut(auth).then(() => {
        navigate(`/login`)
      }).catch((err) => console.log(err))
    }
    else
      navigate(`/${setting.toLowerCase()}`)
  }


  return <div className={classes.header}>
    <AppBar position="static" className={classes.navWrap}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className={'cursor-pointer'} onClick={() => {
            if (user?.uid) return (navigate('/'))
          }}>
            <img src={Logo} className={classes.logo} />
          </Box>
          {user?.uid && <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.route}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>}

          {<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }} >
            <img src={Logo} className={classes.logo} />
          </Box>}
          {user?.uid && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES.map((page) => (
              <Link
                to={page.route}
                key={page.name}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>}
          {user?.uid && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <span className={classes.avatar}>{user?.displayName?.split("")[0]}</span>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography sx={{ textAlign: 'center' }} onClick={() => handleSettingsClick(setting)}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  </div>
};

export default Header;
