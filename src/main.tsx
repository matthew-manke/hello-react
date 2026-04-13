import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './index.css'
import App from './App.js'
import Header from './components/Header';
import Index from './pages/Index'
import Game from './pages/Game'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="hello-react" element={<Index />} />
        <Route path="hello-react/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
