echo 'Installing packages' && \
npm ci --include=dev && \

echo 'Copy over environment variables' && \
cp "$HOME/var/www/envs/cluster/${NODE_ENV}/.env.fe" .env && \

echo 'Running build' && \
npm run build && \

echo 'Starting application' && \
npm run serve
