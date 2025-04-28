import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows the server to be accessible externally
    port: 3000, // Default port for the development server
    strictPort: true, // Ensures the server uses the specified port
    proxy: {
      "/api": {
        target: "https://eltonschristianschool.onrender.com", // Proxy API requests to the backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
