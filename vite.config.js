import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.VITE_PORT);
const { PORT = 8080 } = process.env.VITE_PORT;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': `${process.env.VITE_API_ENDPOINT}`,
    },
  },
})
