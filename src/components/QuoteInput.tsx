import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type QuoteInputProps = {
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
};

export default function FullWidthTextField({ quote, setQuote }: QuoteInputProps) {
  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Quote" id="fullWidth" margin="normal" value={quote} onChange={(e) => setQuote(e.target.value)} />
    </Box>
  );
}