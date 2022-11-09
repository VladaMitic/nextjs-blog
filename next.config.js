const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
  
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      experimental: { esmExternals: true },
      env: {
        mongodb_username: 'vlada',
        mongodb_password: 'Promeni01',
        mongodb_clustername: 'cluster0',
        monodb_database: 'my-blog-dev',
      },
    };
  }

  return {
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true },
    env: {
      mongodb_username: 'vlada',
      mongodb_password: 'Promeni01',
      mongodb_clustername: 'cluster0',
      monodb_database: 'my-blog',
    },
  }
};
