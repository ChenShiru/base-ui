import { defineConfig } from 'vite'

import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
