// Export the configuration object
export default {
  apps: [
    {
      name: "pelita-api-app",
      script: "./index.js",
      env: {
        NODE_ENV: "development", 
      },
      env_development: {
        ENV_FILE: path.resolve(__dirname, `../.env.development`), 
      },
      env_testing: {
        NODE_ENV: "testing", 
        ENV_FILE: path.resolve(__dirname, `../.env.testing`), 
      },
      env_production: {
        NODE_ENV: "production", 
        ENV_FILE: path.resolve(__dirname, `../.env.production`), 
      },
    },
  ],
};
