import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'MFECore',
            fileName: () => 'mfe-core.umd.js',
            formats: ['umd'],
        },
        outDir: 'dist-umd',
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                }
            }
        },
        sourcemap: false,
        minify: true,
    },
});
