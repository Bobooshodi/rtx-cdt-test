# Choose the Image which has Node installed already
FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app/server

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# RUN npm run create-db

# RUN npm run migrate-db

EXPOSE 3000
# CMD [ "npm", "run", "dev" ]
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]