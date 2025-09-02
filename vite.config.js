import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({  
    base: '/Portfolio-Website/',
    plugins: [
        tailwindcss(),  
    ],
})