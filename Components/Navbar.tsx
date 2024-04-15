import * as React from 'react';
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
import Image from 'next/image';
import logo from "@/public/logo-v3.png"
const pages = ['Home', 'About', 'Contact'];
const settings = ['Home'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

  return (
    <AppBar position="static" sx={{background: 'white',color: 'black'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Image src={logo} width={150} height={300} alt='logo'></Image>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black  ', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;