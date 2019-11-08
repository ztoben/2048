const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  devServer: {
    port: 9999,
    open: true
  },
  publicPath: "/",
  configureWebpack: {
    plugins: [
      new WebpackPwaManifest({
        name: "2048",
        short_name: "2048",
        description: "2048 puzzle game",
        background_color: "lightgray",
        theme_color: "#edc02e",
        orientation: "portrait",
        display: "standalone",
        start_url: ".",
        icons: [
          {
            src: path.resolve("src/assets/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      })
    ]
  }
};
