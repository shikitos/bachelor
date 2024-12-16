#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[0;37m'
BOLD='\033[1m'
RESET='\033[0m'

timestamp() {
  date +"%Y-%m-%d %H:%M:%S"
}

error_exit() {
  echo -e "${RED}[ERROR] $1${RESET}"
  exit 1
}

echo -e "${CYAN}[$(timestamp)] Checking if docker is installed${RESET}"
if ! command -v docker &>/dev/null; then
  error_exit "Docker could not be found, please install docker."
fi

echo -e "${CYAN}[$(timestamp)] Checking if docker-compose is installed${RESET}"
if ! command -v docker-compose &>/dev/null; then
  error_exit "Docker-compose could not be found, please install docker-compose."
fi

echo -e "${CYAN}[$(timestamp)] Checking if pnpm is installed${RESET}"
if ! command -v pnpm &>/dev/null; then
  echo -e "${YELLOW}[$(timestamp)] ⚡ pnpm could not be found, installing pnpm...${RESET}"
  npm install -g pnpm || error_exit "Failed to install pnpm"
fi

echo -e "${CYAN}[$(timestamp)] Installing all dependencies for all services${RESET}"
for i in $(ls -d */); do
  cd $i
  if [ -f "package.json" ]; then
    echo -e "${GREEN}[$(timestamp)] ✔️ Installing dependencies for $i${RESET}"
    pnpm install || error_exit "Failed to install dependencies for $i"
  else
    echo -e "${MAGENTA}[$(timestamp)] ⚠️ Skipping $i (No package.json)${RESET}"
  fi
  cd ..
done

echo -e "${GREEN}[$(timestamp)] ✔️ All dependencies installed${RESET}"

echo -e "${CYAN}[$(timestamp)] Seeding database${RESET}"
docker-compose exec backend /bin/sh -c "pnpm seed:posts" || error_exit "Database seeding failed"
echo -e "${GREEN}[$(timestamp)] ✔️ Database seeded${RESET}"

echo -e "${CYAN}[$(timestamp)] Building docker containers${RESET}"
docker-compose build || error_exit "Docker build failed"

echo -e "${BLUE}[$(timestamp)] Do you want to start the Docker containers? (y/n)${RESET}"
read -r confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo -e "${MAGENTA}[$(timestamp)] Skipping Docker container startup.${RESET}"
  exit 0
fi

echo -e "${CYAN}[$(timestamp)] Starting docker containers${RESET}"
docker-compose up -d || error_exit "Failed to start docker containers"

echo -e "${GREEN}[$(timestamp)] ✔️ All services started${RESET}"
