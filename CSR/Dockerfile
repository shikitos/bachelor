# Use an official Node.js image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the pnpm lockfile and package.json files
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the React application code
COPY . .

# Expose the port React runs on
EXPOSE 3001

# Start the React development server
CMD ["pnpm", "build"]
