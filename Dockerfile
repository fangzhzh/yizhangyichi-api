FROM node:8
EXPOSE 3000
COPY app.js /home/node
COPY package.json  /home/node
COPY package-lock.json /home/node
COPY global_functions.js /home/node
COPY config /home/node/config
COPY controllers /home/node/controllers
COPY middleware /home/node/middleware
COPY models /home/node/models
COPY routes /home/node/routes
COPY services /home/node/services
COPY utils /home/node/utils
COPY bin /home/node/bin
WORKDIR /home/node
RUN npm i npm@latest -g
RUN npm install 
ENTRYPOINT [ "npm",  "start"]
