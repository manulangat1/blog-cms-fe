#!/bin/sh

cat <<EOF > /usr/share/nginx/html/env.js
window._env_ = {
  API_URL: "${API_URL}",
  APP_ENV: "${APP_ENV}"
};
EOF

nginx -g "daemon off;"