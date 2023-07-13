module.exports = {
  // Index rewrite allows us to dynamically generate homepage in SanityCMS
  // By creating a page with the slug name 'index'
  // If a visitor goes to /index, it will then redirect to /
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
