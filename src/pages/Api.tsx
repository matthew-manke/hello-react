import { useState, useEffect } from 'react';
import {
  Box,
  MenuItem,
  Select,
  Typography,
  Paper,
} from '@mui/material';

import PageLayout from '../layouts/PageLayout';

type ApiOption = {
  label: string;
  url: string;
};

const API_OPTIONS: ApiOption[] = [
  { label: 'Teapot', url: 'https://httpbin.org/status/418' },
  { label: 'Posts', url: 'https://jsonplaceholder.typicode.com/posts/1' },
  { label: 'Random Dog', url: 'https://dog.ceo/api/breeds/image/random' },
  { label: 'Joke', url: 'https://official-joke-api.appspot.com/random_joke' },
];

export default function Api() {
  const [selectedUrl, setSelectedUrl] = useState(API_OPTIONS[0].url);
  const [status, setStatus] = useState<number | null>(null);
  const [statusText, setStatusText] = useState('');
  const [responseBody, setResponseBody] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ✅ useEffect triggers on dropdown change
  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setStatus(null);
    setStatusText('');
    setResponseBody(null);

    try {
      const res = await fetch(selectedUrl);

      const text = await res.text(); // ✅ only read once

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      setStatus(res.status);
      setStatusText(res.statusText);
      setResponseBody(data);

    } catch (err) {
      setStatus(500);
      setStatusText('Request Failed');
      setResponseBody({ error: String(err) });
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [selectedUrl]);

  return (
    <PageLayout>

      {/* Controls */}
      <Paper sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Box className="flex flex-col gap-4">

          <Select
            value={selectedUrl}
            onChange={(e) => setSelectedUrl(e.target.value)}
            fullWidth
          >
            {API_OPTIONS.map((option) => (
              <MenuItem key={option.url} value={option.url}>
                {option.label}
              </MenuItem>
            ))}
          </Select>

        </Box>
      </Paper>

      {/* Response */}
      <Paper sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Box className="flex flex-col gap-4">

          <Typography variant="h6">Response</Typography>

          {loading && (
            <Typography>Loading...</Typography>
          )}

          {status !== null && (
            <Typography>
              Status: {status} {statusText}
            </Typography>
          )}

          {responseBody && (
            
<Box
  component="pre"
  sx={{
    backgroundColor: '#0d1117',
    color: '#58a6ff',
    fontFamily: 'monospace',
    p: 2,
    borderRadius: 2,
    overflowX: 'auto',
    fontSize: '0.85rem',
    whiteSpace: 'pre-wrap',
  }}
>

  {typeof responseBody === 'string'
    ? responseBody.replace(/\\n/g, '\n')
    : JSON.stringify(responseBody, null, 2)}
</Box>

          )}

        </Box>
      </Paper>

    </PageLayout>
  );
}