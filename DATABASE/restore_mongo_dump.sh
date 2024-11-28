#!/bin/bash

CONTAINER_NAME="bachelor-mongodb-1"
BACKUP_DIR="./mongo-backup/backup"

if [ ! -d "$BACKUP_DIR" ]; then
    echo "Backup directory $BACKUP_DIR does not exist. Exiting."
    exit 1
fi

docker cp "$BACKUP_DIR" "$CONTAINER_NAME":/restore
docker exec -it "$CONTAINER_NAME" mongorestore /restore
docker exec -it "$CONTAINER_NAME" rm -rf /restore

echo "MongoDB restored from $BACKUP_DIR"
