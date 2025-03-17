import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    },
    plugins: [vue()],
      server: {
        proxy: {
          '/api': {
            target: env.VITE_API_URL,
            changeOrigin: true,
            secure: false,
            // rewrite: (path) => path.replace(/^\/api/, ''),
          },
        }
      }
    }
})
