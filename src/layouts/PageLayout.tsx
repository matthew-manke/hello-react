import { Box } from '@mui/material';

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box
      className="flex flex-col items-center gap-6"
      sx={{
        mt: 4,
        px: 2,
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  );
}