import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// غير هذا حسب اسم الريبو عندك على GitHub
const repoName = 'samar-game';

export default defineConfig({
  base: `/${repoName}/`,  // مهم جدًا للصور والكروت
  plugins: [react()],
})
