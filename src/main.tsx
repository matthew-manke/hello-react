import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from "react-router";
import './index.css'
import Header from './components/Header';
import Index from './pages/Index'
import Game from './pages/Game'
import Quotes from './pages/Quotes';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/game" element={<Game />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
