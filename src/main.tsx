import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Outlet } from "react-router";
import './index.css'
import Header from './components/Header';
import Index from './pages/Index'
import Game from './pages/Game'
import Quotes from './pages/Quotes';
import Container from '@mui/material/Container';
import Api from './pages/Api';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Header />
    <Container sx={{ mt: 4 }}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="demo">
          <Route index element={<><h1>A demo</h1><p>With nested routes!</p></>} />
          <Route path="game" element={<Game />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="api" element={<Api />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  </HashRouter>
)
