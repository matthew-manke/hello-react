import { Link as RouterLink } from 'react-router';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';

export default function Header() {
  return (
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
  );
}