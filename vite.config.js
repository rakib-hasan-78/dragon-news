import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // 👈 Add "-swc" to the end here
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
