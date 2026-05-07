import { Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import PageLayout from '../layouts/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>

      <Box className="flex flex-col items-center gap-4">
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          404
        </Typography>

        <Typography variant="h6">
          Page Not Found
        </Typography>

        <Typography color="text.secondary">
          Sorry, the page you're looking for doesn’t exist.
        </Typography>

        <Button component={RouterLink} to="/" variant="contained">
          Go Home
        </Button>
      </Box>

    </PageLayout>
  );
}