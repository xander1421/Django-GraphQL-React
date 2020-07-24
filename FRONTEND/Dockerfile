# Use an official node runtime as a parent image
FROM node:14.5.0-alpine

WORKDIR /app/frontend

# Install dependencies
COPY package.json yarn.lock /app/frontend/

RUN yarn install

# Add rest of the client code
COPY . /app/frontend/

EXPOSE 8080

ENTRYPOINT [ "yarn", "start"]