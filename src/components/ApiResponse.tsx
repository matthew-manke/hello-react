import { use } from 'react';
import { Box, Typography, Paper } from '@mui/material';

type ApiResponseProps = {
  apiPromise: Promise<any>;
};

export default function ApiResponse({ apiPromise }: ApiResponseProps) {
  const res = use(apiPromise);

  return (
    <Paper sx={{ p: 3, width: '100%', maxWidth: 600 }}>
      <Box className="flex flex-col gap-4">

        <Typography variant="h6">
          Response
        </Typography>

        <Typography>
          Status: {res.status} {res.statusText}
        </Typography>

        <Box
          component="pre"
          sx={{
            backgroundColor: '#0d1117',
            color: '#58a6ff',
            fontFamily: 'monospace',
            p: 2,
            borderRadius: 2,
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            fontSize: '0.85rem',
          }}
        >
          {typeof res.data === 'string'
            ? res.data.replace(/\\n/g, '\n')
            : JSON.stringify(res.data, null, 2)}
        </Box>

      </Box>
    </Paper>
  );
}