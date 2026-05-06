import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '../components/Button';
import Card from '../components/Card';
import List from '../components/List';
import QuoteInput from '../components/QuoteInput';
import SearchInput from '../components/SearchInput';
import PageLayout from '../layouts/PageLayout';

export default function Quotes() {
  const DEFAULT_QUOTES = [
    "You know that's right.",
    "I've heard it both ways",
    "Have you heard about Pluto? That's messed up, right?",
    "Are you a fan of delicious flavor?"
  ];

  const [quotes, setQuotes] = useState(DEFAULT_QUOTES);
  const [quote, setQuote] = useState('');
  const [searchTerm, setSearchTerm] = useState("");

  const clearQuotes = () => setQuotes([]);
  const resetQuotes = () => setQuotes(DEFAULT_QUOTES);

  const addQuote = () => {
    if (!quote.trim()) return;
    setQuotes(prev => [...prev, quote]);
    setQuote('');
  };

  function filterQuotes(quotes: string[], searchAtom: string): string[] {
    if (!searchAtom.trim()) return quotes;

    const atom = searchAtom.toLowerCase();
    return quotes.filter(q => q.toLowerCase().includes(atom));
  }

  const filteredQuotes = filterQuotes(quotes, searchTerm);

  return (
    <PageLayout>
      <Grid container spacing={4}>
        
        {/* Quotes list */}
        <Grid size={{ xs: 12 }}>
          <List listItems={filteredQuotes} />
        </Grid>

        {/* Controls */}
        <Grid size={{ xs: 12 }}>
          <Card>
            <div className="flex flex-col gap-4">
              
              <QuoteInput quote={quote} setQuote={setQuote} />

              <div className="flex flex-wrap gap-2">
                <Button onClick={addQuote}>Add Quote</Button>
                <Button onClick={clearQuotes} variant="outlined">Clear</Button>
                <Button onClick={resetQuotes} variant="text">Reset</Button>
              </div>

              <SearchInput onChange={setSearchTerm} />

            </div>
          </Card>
        </Grid>

      </Grid>
    </PageLayout>
  );
}