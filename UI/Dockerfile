# Start from a Node.js image
FROM node:20

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the lock file and pnpm workspace file
COPY pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy the UI package.json file
COPY UI/package.json ./UI/

# Install the dependencies (pnpm install should be run here)
RUN pnpm install

# Copy the entire UI source into the container
COPY UI /app/UI

# Set the working directory to UI
WORKDIR /app/UI

# Build the UI kit (this is assuming you have a rollup build setup in your package.json)
RUN pnpm build
