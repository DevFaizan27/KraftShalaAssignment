// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     "process.env": process.env,
//     VITE_RAPIDAPI: process.env.VITE_RAPIDAPI,
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    'process.env.VITE_RAPIDAPI': JSON.stringify(process.env.VITE_RAPIDAPI),
  },
});

