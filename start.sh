#!/bin/bash

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

# Run docker containers
echo "Building docker containers"
docker-compose build
echo "Starting docker containers"
docker-compose up -d
