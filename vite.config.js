////to fix render issues
import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['reblok.onrender.com'],
  },
})
