// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   optimizeDeps:{
//     exclude: ['react-icons']
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   optimizeDeps:{
//     exclude: ['react-icons']
//   },
//   root: './client',
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true,
//     chunkSizeWarningLimit: 100000 // Set the chunk size warning limit to 100000 bytes (100 kB)
//   }
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './client',
  plugins: [react()],
  build: {
    outDir: '../dist',  // Correct output directory
    emptyOutDir: true,  // Clear output directory before building
    chunkSizeWarningLimit: 100000 // Set the chunk size warning limit to 100000 bytes (100 kB)
  },
});
