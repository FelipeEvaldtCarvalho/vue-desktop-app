const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: (config) => {
    config.externals = {
      "better-sqlite3": "commonjs better-sqlite3",
    };
  },
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      externals: ["better-sqlite3"],
    },
  },
});
