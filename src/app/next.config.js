
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://zaika.bytesed.com/api/v1/category:path*', // Replace with your actual server port
      },
    ];
  },
};
