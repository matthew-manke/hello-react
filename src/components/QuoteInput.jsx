import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({ quote, updater }) {
  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Quote" id="fullWidth" margin="normal" value={quote} onChange={(e) => updater(e.target.value)} />
    </Box>
  );
}