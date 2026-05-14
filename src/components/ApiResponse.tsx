import { useSuspenseQuery } from '@tanstack/react-query';
import { Box, Typography, Paper } from '@mui/material';
import { fetchApi } from '../api/fetchApi';

type ApiResponseProps = {
  url: string;
};

export default function ApiResponse({ url }: ApiResponseProps) {
  const { data: res } = useSuspenseQuery({
    queryKey: ['api', url],
    queryFn: () => fetchApi(url),
  });

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