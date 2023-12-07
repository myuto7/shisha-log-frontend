FROM node:21-alpine

WORKDIR /src

COPY package.json package-lock.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","run","dev"]