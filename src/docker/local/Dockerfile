ARG NODE_VERSION=16.14-alpine 

FROM node:${NODE_VERSION} as node 

FROM node as client-local-build 


LABEL AUTHOR "Langat emmanuel"
ARG APP_HOME=/app 

WORKDIR ${APP_HOME}

COPY ./package*.json . 
RUN npm install 

COPY . ${APP_HOME}


CMD ["npm", "start"]