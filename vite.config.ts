import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'MyDemo',       // sẽ tạo window.MFECore
            fileName: () => `my-demo.umd.js`,  // dist/mfe-core.umd.js
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
