import Button from '@mui/material/Button'

type ButtonProps = {
  call_to_action: string;
  action: () => void;
};

function ButtonInternal({ call_to_action = "Click Me!", action }: ButtonProps) {
  return (
    <Button variant='contained' onClick={action}>
      { call_to_action }
    </Button>
  )
}

export default ButtonInternal