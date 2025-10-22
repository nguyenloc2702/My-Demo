import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'MyDemo',
            fileName: () => `my-demo.umd.js`,
            formats: ['umd'],
        },
        rollupOptions: {
            // React/ReactDOM external, host app sẽ cung cấp
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
