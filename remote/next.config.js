const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Nav": "./components/Nav.js",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: "18.2.0",
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: "18.2.0",
          },
        },
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
      })
    );

    return config;
  },
};
