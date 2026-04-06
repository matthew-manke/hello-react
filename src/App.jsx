import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import List from './components/List'

function App() {
  const DEFAULT_QUOTES = [
    "I'd buy that for a dollar!",
    "For me it was a Tuesday.",
    "Search your feelings, you know it to be true.",
    "How's that for a slice of fried gold?"
  ];
  const [quotes, setQuotes] = useState(DEFAULT_QUOTES);
  const clearQuotes = () => {
    setQuotes([]);
  }
  const resetQuotes = () => {
    setQuotes(DEFAULT_QUOTES);
  }

  return (
    <>
	<Card>
	  <List listItems={quotes} />
	</Card>
	<Card>
		<Button call_to_action='Clear!' action={clearQuotes} />
		<Button call_to_action='Reset!' action={resetQuotes} />
	</Card>
    </>
  )
}

export default App
