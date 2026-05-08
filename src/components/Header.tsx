import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router';
import { Box, Typography, Button, ButtonGroup, Menu, MenuItem } from '@mui/material';

export default function Header() {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const showMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/demo');
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <ButtonGroup>
      <Button component={RouterLink} to="/">HOME</Button>
      <Button 
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={showMenu}
        onClick={handleClick}
      >
        Demos
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': buttonId,
          },
        }} 
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </ButtonGroup>
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        mb: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          margin: '0 auto',
          px: 2,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Title */}
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Hello, React!
        </Typography>

        {/* Navigation */}
        <ButtonGroup variant="contained">
          <Button component={RouterLink} to="/">
            Home
          </Button>

          <Button component={RouterLink} to="demo/game">
            Game
          </Button>

          <Button component={RouterLink} to="demo/quotes">
            Quotes
          </Button>

          <Button component={RouterLink} to="demo/api">
            Api
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
    </>
  );
}