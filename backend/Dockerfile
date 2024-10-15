# Base image.
FROM node:18-alpine

# Set the Enviournment to production
ENV NODE_ENV=production

# Create app directory.
WORKDIR /usr/src/app

# A wildcard is used to copy package.json AND package-lock.json.
COPY package*.json ./

# Install nestjs which is required for bulding the Nest.js project.
# (Skip for Node.js Projects)
RUN npm install -g @nestjs/cli

# Installs only the dependencies and skips devDependencies.
RUN npm install --omit=dev

# Copy all the files to the container.
COPY . .

# Create a "dist" folder with the production build.
#(Skip for Node.js Projects)
RUN npm run build


# Start the server using the production build for:

# Nest.js:
CMD [ "node", "dist/main.js" ]
 
 # ___OR___

# Node.js:
# CMD ["node", "index.js"]

# Expose port 8080 of your microservice / server.
EXPOSE 8080