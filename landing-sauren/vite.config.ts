import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Cambiado para dominios personalizados
  build: {
    outDir: 'dist' // Carpeta de salida
  }
})
