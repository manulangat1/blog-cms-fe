ARG NODE_VERSION=18-alpine

# =========================
# Build Stage
# =========================
FROM node:${NODE_VERSION} AS build

ARG APP_HOME=/app
WORKDIR ${APP_HOME}

COPY package*.json ./

RUN npm cache clean --force && \
    npm install ajv@^8 ajv-keywords@^5 --save-dev --legacy-peer-deps && \
    npm install --legacy-peer-deps

COPY . .

# Build-time environment variables
ARG REACT_APP_API_URL
ARG REACT_APP_ENV

ENV REACT_APP_BASE_URL=https://blog-be.vm.kipchirchirlangat.com
# ENV REACT_APP_ENV=$REACT_APP_ENV

RUN npm run build


# =========================
# Serve Stage
# =========================
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# React SPA routing support
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]