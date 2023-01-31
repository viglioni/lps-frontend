const nextConfig = {
  distDir: '.next',
  publicRuntimeConfig: {
    env: process.env.NODE_ENV || 'dev',
    baseUrlProd: process.env.URL
  }
}

module.exports = nextConfig
