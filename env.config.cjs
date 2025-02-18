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
      env_testing: {
        NODE_ENV: "testing",
        ENV_FILE: `.env.testing`,
      },
      env_production: {
        NODE_ENV: "production",
        ENV_FILE: `.env.production`,
      },
    },
  ],
};

module.exports = configuration;