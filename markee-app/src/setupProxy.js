const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/call/web',
    createProxyMiddleware({
      target: 'https://api.vapi.ai',
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/call/web': '/call/web',
      },
    })
  );
};
