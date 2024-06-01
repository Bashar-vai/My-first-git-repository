import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './src/index.html',
      output: {
        assetFileNames: assetInfo => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(js)$/.test(assetInfo.name)) {
            return `js/[name].${extType}`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(assetInfo.name)) {
            return `media/[name].${extType}`;
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name].${extType}`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `fonts/[name].${extType}`;
          }
          return `[name].${extType}`;
        },
      },
    },
  },
})
