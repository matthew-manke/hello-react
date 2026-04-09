import Card from '@mui/material/Card';

type CardProps = {
  children: React.ReactNode;
}

function CardInternal({ children }: CardProps) {
  return <Card variant="outlined">{children}</Card>;
}

export default CardInternal
