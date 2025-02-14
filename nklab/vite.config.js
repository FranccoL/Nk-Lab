import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Adiciona a base correta para produção
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Garante suporte ao fallback
  },
})
