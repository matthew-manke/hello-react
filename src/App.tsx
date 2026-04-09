import { useState } from 'react'
import './App.css'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Button from './components/Button'
import Card from './components/Card'
import List from './components/List'
import QuoteInput from './components/QuoteInput'

function App() {
  const DEFAULT_QUOTES = [
    "You know that's right.",
    "I've heard it both ways",
    "Have you heard about Pluto? That's messed up, right?",
    "Are you a fan of delicious flavor?"
  ];
  const [quotes, setQuotes] = useState(DEFAULT_QUOTES);
  const [quote, setQuote] = useState('Type your quote here!');

  const clearQuotes = () => {
    setQuote(quote);
    setQuotes([]);
  }
  const resetQuotes = () => {
    setQuotes(DEFAULT_QUOTES);
  }
  const addQuote = () => {
    setQuotes([...quotes, quote]);
    setQuote('Type your quote here!');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <Card>
            <List listItems={quotes} />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 6 }}>
          <Card>
            <QuoteInput quote={quote} setQuote={setQuote} />
            <Button call_to_action='Add 1 quote' action={addQuote} />
            <Button call_to_action='Clear!' action={clearQuotes} />
            <Button call_to_action='Reset!' action={resetQuotes} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
