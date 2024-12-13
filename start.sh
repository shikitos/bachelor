#!/bin/bash

echo "Checking if docker is installed"
if ! command -v docker &>/dev/null; then
  echo "Docker could not be found, please install docker"
  exit 1
fi

echo "Checking if docker-compose is installed"
if ! command -v docker-compose &>/dev/null; then
  echo "Docker-compose could not be found, please install docker-compose"
  exit 1
fi

# echo "Installing docker"
# sudo apt-get update
# sudo apt-get install -y docker.io
# sudo systemctl start docker
# sudo systemctl enable docker

# echo "Installing docker-compose"
# sudo apt-get install -y docker-compose

if ! command -v pnpm &>/dev/null; then
  echo "pnpm could not be found, installing pnpm"
  npm install -g pnpm
fi

for i in $(ls -d */); do
  cd $i
  if [ -f "package.json" ]; then
    echo "Installing dependencies for $i"
    pnpm install
  else
    echo "Skipping $i"
  fi
  cd ..
done

echo "All dependencies installed"

echo "Seeding database"
docker-compose exec backend /bin/sh -c "pnpm seed:posts"
echo "Database seeded"

# Run docker containers
echo "Building docker containers"
docker-compose build
echo "Starting docker containers"
docker-compose up -d
