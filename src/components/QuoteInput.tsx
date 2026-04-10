import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type QuoteInputProps = {
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<string>>; // When converting from JS I queried the robot
};

export default function FullWidthTextField({ quote, setQuote }: QuoteInputProps) {
  return (
    <Box sx={{ maxWidth: '100%' }}>
      <TextField fullWidth label="Add a quote" id="fullWidth" margin="normal"
        value={quote} onChange={(e) => setQuote(e.target.value)} />
    </Box>
  );
}