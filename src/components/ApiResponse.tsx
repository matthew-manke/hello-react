import { use } from 'react';
import { Box, Typography, Paper } from '@mui/material';

type ApiResponseProps = {
  apiPromise: Promise<any>;
};

export default function ApiResponse({ apiPromise }: ApiResponseProps) {
  const res = use(apiPromise);

  return (
    <Paper className="p-6 w-full max-w-[600px]">
      <Box className="flex flex-col gap-4">

        <Typography variant="h6">
          Response
        </Typography>

        <Typography>
          Status: {res.status} {res.statusText}
        </Typography>

        <Box
          component="pre"
          className="p-4 rounded-lg overflow-x-auto whitespace-pre-wrap text-[0.85rem]"
          sx={{
            backgroundColor: '#0d1117',
            color: '#58a6ff',
            fontFamily: 'monospace',
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