FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Copy package configuration into container
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)
COPY package*.json ./

# Run the installer
RUN npm install

# Copy all local files (e.g. server.js, static/index.html)
# into the container
COPY . .

# Node default port
EXPOSE 3000
EXPOSE 3001

# What command to run when the container starts?
CMD [ "npm", "start" ]