import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <MuiCard
      variant="outlined"
      sx={{
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {children}
      </CardContent>
    </MuiCard>
  );
}