module.exports = {
  apps: [
    {
      append_env_to_name: true,
      autorestart: true,
      env_production: {
        NODE_ENV: "production",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      instances: 1,
      max_memory_restart: "1G",
      max_restarts: 50,
      name: "cluster-fe",
      script: "./bin/deploy.sh",
      time: true,
      watch: false,
    },
  ],
  deploy: {
    production: {
      host: process.env.SERVER_HOST,
      key: "~/.ssh/deploy.key",
      path: "/var/www/live/cluster-fe",
      "post-deploy": "pm2 startOrRestart ecosystem.config.cjs --env production",
      ref: "origin/main",
      repo: "git@github.com:Ibitron-technologies/cluster-FE.git",
      user: process.env.SERVER_USER,
    },
    staging: {
      host: process.env.SERVER_HOST,
      key: "~/.ssh/deploy.key",
      path: "/var/www/staging/cluster-fe",
      "post-deploy": "pm2 startOrRestart ecosystem.config.cjs --env staging",
      ref: "origin/main",
      repo: "git@github.com:Ibitron-technologies/cluster-FE.git",
      user: process.env.SERVER_USER,
    },
  },
};
