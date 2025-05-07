const { watch } = require('fs');
const path = require('path');

// Export the configuration object
const configuration = {
  apps: [
    {
      name: "legacy-api",
      script: "./index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_development: {
        ENV_FILE: `.env.development`,
      },
      env_test: {
        NODE_ENV: "test",
        ENV_FILE: ".env.test",
      },
      env_staging: {
        NODE_ENV: "staging",
        ENV_FILE: `.env.staging`,
      },
      env_production: {
        NODE_ENV: "production",
        ENV_FILE: `.env.production`,
      },
    },
  ],
};

module.exports = configuration;