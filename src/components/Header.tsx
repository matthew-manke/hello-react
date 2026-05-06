import { Link as RouterLink } from 'react-router';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Header() {
  return (
    <header className="mb-6 text-center">
      <h1 className="mb-4 text-2xl font-bold">
        Hello, React!
      </h1>

      <nav className="flex justify-center">
        <ButtonGroup sx={{ boxShadow: 2 }}>
          <Button component={RouterLink} to="/">
            Home
          </Button>

          <Button component={RouterLink} to="/game">
            Game
          </Button>

          <Button component={RouterLink} to="/quotes">
            Quotes
          </Button>
        </ButtonGroup>
      </nav>
    </header>
  );
}