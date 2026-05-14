import { useState, Suspense, useMemo } from 'react';
import {
  MenuItem,
  Select,
  Paper,
  Skeleton
} from '@mui/material';

import PageLayout from '../layouts/PageLayout';
import { fetchApi } from '../api/fetchApi';
import ApiResponse from '../components/ApiResponse';
import ErrorBoundary from '../components/ErrorBoundary';

type ApiOption = {
  label: string;
  url: string;
};

const API_OPTIONS: ApiOption[] = [
  { label: 'Posts', url: 'https://jsonplaceholder.typicode.com/posts/1' },
  { label: 'Dog', url: 'https://dog.ceo/api/breeds/image/random' },
  { label: 'Joke', url: 'https://official-joke-api.appspot.com/random_joke' },
  { label: 'Teapot', url: 'https://httpbin.org/status/418' },
];

export default function ApiPage() {
  const [selectedUrl, setSelectedUrl] = useState(API_OPTIONS[0].url);

  const apiPromise = useMemo(() => {
    return fetchApi(selectedUrl);
  }, [selectedUrl]);

  return (
    <PageLayout>

      {/* Controls */}
      <Paper sx={{ p: 3, width: '100%', maxWidth: 600 }}>
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
      </Paper>

      {/* Suspense Boundary */}
      <ErrorBoundary fallback={<p>Error occurred</p>}>       
        <Paper sx={{ p: 3, width: '100%', maxWidth: 600, minHeight: 200 }}>
          <Suspense fallback={<Skeleton height={150} />}>
            <ApiResponse apiPromise={apiPromise} />
          </Suspense>
        </Paper>
      </ErrorBoundary>


    </PageLayout>
  );
}
