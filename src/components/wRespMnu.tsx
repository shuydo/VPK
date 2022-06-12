import React from 'react';
import { useAuth } from 'reactfire';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['1st', '2nd', '3rd', '4th'];
// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = ['Logout'];

const ResponsiveAppBar: React.FC = () => {
  const auth = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let avatarBy = '';
  if (auth.currentUser?.email) avatarBy = auth.currentUser.email;

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: '#F50057' }}>
        <Toolbar disableGutters>
          {/* Иконка бургера и за ней текст заголовка панели 
          Скопировал сюда иконку с обёрткой и меню снизу */}
          {/* <MenuIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ m: 0 }}>
            {/* flexGrow: 1, display: 'flex'  */}
            <IconButton
              sx={{ p: 0 }} //
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: 'block' }}
              // sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* ============================ */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              ml: 2, //
              // mr: 2,
              // display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 500, // 700
              fontSize: 20, //
              letterSpacing: '0.15px', // '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Voypost
          </Typography>
          {/* IconButton с вложенной MenuIcon бургера с выпад.менюшкой(это все видно после 899px) // было xs: 'flex' */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
          <Box sx={{ flexGrow: 1, display: 'none' }}>
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Снова иконка и заголовок, но видны до 900px */}
          <AdbIcon sx={{ display: 'none', mr: 1 }} />
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: 'none',
              // display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500, // 700
              fontSize: 20, //
              letterSpacing: '0.15px', // '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGOs
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          {/* Меню-кнопка с всплыв.подсказкой для взаимодюс акк. */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Свойства">
              <IconButton onClick={handleOpenUserMenu}>
                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                <Avatar alt={avatarBy} src="/" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ top: { xs: '41px', sm: '49px' } }} // 45
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                // <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <MenuItem key={setting} onClick={() => auth.signOut()}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
