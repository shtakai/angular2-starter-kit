FROM node:5.6.0-wheezy

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install --production

COPY dist /usr/src/app/dist

EXPOSE 3000

CMD npm start
