import '../App.css'
import { Link } from 'react-router';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export default function Header() {
  return (
    <>    
    <h1>Hello, React!</h1>
    <nav className="m-4">
      <ButtonGroup>
        <Button><Link to='/'>Home</Link></Button>
        <Button><Link to='/game'>Game</Link></Button>
        <Button><Link to='/quotes'>Quotes</Link></Button>
      </ButtonGroup>
    </nav>
    </>
  )
}