import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// Define configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use the port specified in environment variable PORT or default to 3000
  },
});