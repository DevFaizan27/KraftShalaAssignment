import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_RAPIDAPI_KEY: process.env.VITE_RAPIDAPI_KEY,
  },
})
