#!/bin/bash

CONTAINER_NAME="bachelor-mongodb-1"
BACKUP_DIR="./mongo-backup"

# Remove existing backup directory if it exists
echo "Removing existing backup directory..."
rm -rf "$BACKUP_DIR"

# Create backup directory
echo "Creating backup directory..."
mkdir -p "$BACKUP_DIR"

# Run mongodump inside the container
echo "Running mongodump inside the container..."
docker exec -it "$CONTAINER_NAME" mongodump --out /backup

# List contents of the backup directory inside the container
echo "Listing contents of the backup directory inside the container..."
docker exec -it "$CONTAINER_NAME" ls -l /backup

# Copy the dump from the container to the host
echo "Copying dump from container to host..."
docker cp "$CONTAINER_NAME":/backup/. "$BACKUP_DIR"

# List contents of the backup directory on the host
echo "Listing contents of the backup directory on the host..."
ls -l "$BACKUP_DIR"

# Remove the dump from the container
echo "Removing dump from container..."
docker exec -it "$CONTAINER_NAME" rm -rf /backup

echo "MongoDB dump created at $BACKUP_DIR"
