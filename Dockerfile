FROM node:17
# Create app directory
WORKDIR /Users/Ben/apps/DockerImages/
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3001
CMD [ "npm", "start" ]