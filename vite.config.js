import {createVuePlugin} from "vite-plugin-vue2";
import {defineConfig} from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            '@': '/src/',
            '@components': '/src/components/',
            '@assets': '/src/assets/',
        },
    },
    base: "/",
    plugins: [
        // vue()
        createVuePlugin()
    ]
});