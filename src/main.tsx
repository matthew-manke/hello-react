import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
//import App from './App.js'
import Index from './pages/Index'
import Game from './pages/Game'

const router = createBrowserRouter([
  { // default route
    index: true,
    Component: Index,
  },
  {
    path: "/game",
    Component: Game
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
