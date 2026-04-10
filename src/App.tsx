import { useState } from 'react'
import './App.css'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Button from './components/Button'
import Card from './components/Card'
import List from './components/List'
import QuoteInput from './components/QuoteInput'
import SearchInput from './components/SearchInput'
import WhatIsThis from './components/WhatIsThis'

function App() {
  const DEFAULT_QUOTES = [
    "You know that's right.",
    "I've heard it both ways",
    "Have you heard about Pluto? That's messed up, right?",
    "Are you a fan of delicious flavor?"
  ];
  const [quotes, setQuotes] = useState(DEFAULT_QUOTES);
  const [quote, setQuote] = useState('');
  const [searchTerm, setSearchTerm] = useState("");

  const clearQuotes = () => {
    setQuotes([]);
  }
  const resetQuotes = () => {
    setQuotes(DEFAULT_QUOTES);
  }
  const addQuote = () => {
    if (!quote.trim()) return; // Prevent adding empty quotes, similar to !searchAtom.trim()
    setQuotes(prev => [...prev, quote]); // Using '...prev' instead of '...quotes', note from robot about stale state and async actions
    setQuote('');
  }

  function filterQuotes(quotes: string[], searchAtom: string): string[] {
    if (!searchAtom.trim()) { // equivalent to searchAtom.trim() === '', empty strings are falsy
      return quotes;
    }

    const atom = searchAtom.toLowerCase();

    return quotes.filter((quote) => quote.toLowerCase().includes(atom));
  }

  const filteredQuotes = filterQuotes(quotes, searchTerm);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Card>
            <WhatIsThis />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Card>
            <QuoteInput quote={quote} setQuote={setQuote} />
            <Button call_to_action='Add a quote' action={addQuote} />
            <Button call_to_action='Clear!' action={clearQuotes} />
            <Button call_to_action='Reset!' action={resetQuotes} />
          </Card>
          <Card>
            <SearchInput onChange={handleSearchChange} />
            <List listItems={filteredQuotes} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
