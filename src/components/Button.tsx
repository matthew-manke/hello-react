import MuiButton from '@mui/material/Button';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'contained' | 'outlined' | 'text';
};

export default function Button({
  children,
  onClick,
  variant = 'contained',
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{ minWidth: 120 }}
    >
      {children}
    </MuiButton>
  );
}