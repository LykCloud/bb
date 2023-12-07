# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory

# Install app dependencies
RUN npm i eazyminer

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port used by the web interface (assuming it's 3000)
EXPOSE 3000

# Command to run your application
CMD ["node", "app.js"]
