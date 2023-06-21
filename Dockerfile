# Use a Node.js base image with a specific version
FROM node:14.17.3

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Node.js application listens on
EXPOSE 80

# Start the Node.js application
CMD ["npm", "start"]
