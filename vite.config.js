import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/parnav-mhargude/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
