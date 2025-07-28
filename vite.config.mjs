export default defineConfig({
  base: './',
  plugins: [tsconfigPaths(), react(), tagger()],
  build: {
    outDir: 'dist', // Output build folder
    chunkSizeWarningLimit: 2000
  },
  server: {
    port: '4028',
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});
