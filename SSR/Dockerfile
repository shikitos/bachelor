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

# Copy the rest of the Next.js application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js development server
CMD ["pnpm", "dev"]
