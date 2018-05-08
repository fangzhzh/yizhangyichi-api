FROM node:8
EXPOSE 3000
COPY app.js /home/node
COPY config /home/node/config
COPY package.json  /home/node
COPY package-lock.json /home/node
COPY global_functions.js /home/node
COPY routes /home/node/routes
COPY controllers /home/node/controllers
COPY models /home/node/models
COPY services /home/node/services
COPY middleware /home/node/middleware
COPY bin /home/node/bin
WORKDIR /home/node
RUN npm install 
ENTRYPOINT [ "npm",  "start"]
