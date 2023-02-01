const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/code-test", {
      target: "http://en.seegenepr.com",
      changeOrigin: true,
    })
  );
};
