FROM node:14
WORKDIR /app
RUN npm install
RUN npm install redis@latest
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]