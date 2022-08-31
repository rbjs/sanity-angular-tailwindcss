const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://g1g9bbv8.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;