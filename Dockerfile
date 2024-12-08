FROM node:18

WORKDIR /app/

COPY package.json ./

COPY build /build 

# RUN npm uninstall node-sass

# RUN npm i sass-loader@latest

RUN npm install -g serve@13.0.4


# RUN  npm install --legacy-peer-dep

# CMD serve -s build

CMD ["npx", "serve", "-s", "build", "-p", "1214"]