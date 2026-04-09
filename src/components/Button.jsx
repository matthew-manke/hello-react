import Button from '@mui/material/Button'

function ButtonInternal({ call_to_action = "Click Me!", action }) {
  return (
    <Button variant='contained' onClick={action}>
      { call_to_action }
    </Button>
  )
}

export default ButtonInternal