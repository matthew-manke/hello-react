import Card from '@mui/material/Card';

function CardInternal({ children }) {
  return <Card variant="outlined">{children}</Card>;
}

export default CardInternal
