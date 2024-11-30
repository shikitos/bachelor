#!/bin/bash

CONTAINER_NAME="bachelor-mongodb-1"
BACKUP_DIR="./mongo-backup"

echo "Removing existing backup directory..."
rm -rf "$BACKUP_DIR"

echo "Creating backup directory..."
mkdir -p "$BACKUP_DIR"

echo "Running mongodump inside the container..."
docker exec -it "$CONTAINER_NAME" mongodump --out /backup

echo "Listing contents of the backup directory inside the container..."
docker exec -it "$CONTAINER_NAME" ls -l /backup

echo "Copying dump from container to host..."
docker cp "$CONTAINER_NAME":/backup/. "$BACKUP_DIR"

echo "Listing contents of the backup directory on the host..."
ls -l "$BACKUP_DIR"

echo "Removing dump from container..."
docker exec -it "$CONTAINER_NAME" rm -rf /backup

echo "MongoDB dump created at $BACKUP_DIR"
