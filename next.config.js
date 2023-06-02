/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
}



module.exports = {
  // Allow global CSS imports from node_modules
  cssModules: {
    mode: 'global',
    allowGlobal: true,
  },
};

module.exports = nextConfig
