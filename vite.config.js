import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ]
  // For local development with HMR the base can't be defined with the repo name,
  // this base: "" will work for both.
  // DISCLAIMER: I changed this after the initial deployment, it may be necessary for the initial deploy.
  ,base: ""
})
