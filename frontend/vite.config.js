import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Sites_by_colin",
  server: {
    port: 2006, // <-- change this to your desired port
  },
})
