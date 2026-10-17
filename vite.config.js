import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CHO_own_web/',
  plugins: [react()],
})
