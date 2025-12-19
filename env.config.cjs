const { watch } = require('fs');
const path = require('path');

// Export the configuration object
const configuration = {
  apps: [
    {
      script: "./index.js",
      watch: true,
      env: {
        name: "legacy-api-dev-main",
        NODE_ENV: "development",
      },
      env_development: {
        name: "legacy-api-dev",
        ENV_FILE: `.env.development`,
      },
      env_test: {
        name: "legacy-api-test",
        NODE_ENV: "test",
        ENV_FILE: ".env.test",
      },
      env_staging: {
        name: "legacy-api-staging",
        NODE_ENV: "staging",
        ENV_FILE: `.env.staging`,
      },
      env_production: {
        name: "legacy-api-prod",
        NODE_ENV: "production",
        ENV_FILE: `.env.production`,
      },
    },
  ],
};

module.exports = configuration;