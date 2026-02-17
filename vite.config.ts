import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PM-Office/',   // 👈 ชื่อ repo ต้องตรง
})
