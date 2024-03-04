import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  const vite_port = env.PORT as unknown as number;

  return {
    plugins: [react()],
    server: {
      port: vite_port,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        components: `${path.resolve(__dirname, "./src/components/")}`,
        contexts: `${path.resolve(__dirname, "./src/contexts")}`,
        hooks: `${path.resolve(__dirname, "./src/hooks")}`,
        utilities: `${path.resolve(__dirname, "./src/utilities")}`,
        pages: path.resolve(__dirname, "./src/pages"),
        types: `${path.resolve(__dirname, "./src/types")}`,
      },
    },
  }
})
