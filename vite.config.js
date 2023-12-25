import {defineConfig} from "vite";
import {resolve} from "path";
import {createHtmlPlugin} from "vite-plugin-html";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/vite-vanila/" : "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        product: resolve(__dirname, "./src/page/product.html"),
        products: resolve(__dirname, "./src/page/products.html"),
        blog: resolve(__dirname, "./src/page/blog.html"),
        cart: resolve(__dirname, "./src/page/cart.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name) {
            let extType = assetInfo.name.split(".").pop().toLowerCase();
            if (extType) {
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "images";
                return `asset/${extType}/[name]-[hash][extname]`;
              }
            }
          }
          return "asset/css/[name]-[hash][extname]";
        },
        chunkFileNames: "asset/js/[name]-[hash].js",
        entryFileNames: "asset/js/[name]-[hash].js",
      },
    },
  },
  plugins: [
    terser({
      compress: {
        drop_console: true,
      },
      mangle: {
        toplevel: true,
      },
      output: {
        beautify: false,
      },
      keep_classnames: false,
      keep_fnames: false,
    }),
    createHtmlPlugin({minify: true}),
  ],
  server: {
    open: true,
  },
});
