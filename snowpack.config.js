/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript', '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  /* Need to add an optimizer for prod builds, and also update the snowpack version to v3 */
  
  // optimize: {
  //   minify: true,
  //   splitting: true,
  //   bundle: true,
  // },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
