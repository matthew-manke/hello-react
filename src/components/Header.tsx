import { Link } from 'react-router';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export default function Header() {
  return (
    <>    
    <h1>Hello, React!</h1>
    <nav className="m-4">
      <ButtonGroup>
        <Button><Link to='/hello-react'>Home</Link></Button>
        <Button><Link to='/hello-react/game'>Game</Link></Button>
      </ButtonGroup>
    </nav>
    </>
  )
}