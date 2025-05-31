module.exports = {
  apps: [
    {
      name: "nextjs-base-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000", // bạn có thể đổi port nếu cần
      instances: "max",           // hoặc "max" nếu muốn cluster
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
