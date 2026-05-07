import { Box } from '@mui/material';

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box
      className="flex flex-col items-center gap-6 mt-8 px-4 max-w-[800px] mx-auto"
    >
      {children}
    </Box>
  );
}