import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
	vite: {
		build: {
			rollupOptions: {
				external: ['vue/server-renderer', 'md'],
			},
		},
	},
});
