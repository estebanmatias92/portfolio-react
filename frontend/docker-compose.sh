#!/bin/bash

#
# Optional entrypoint script
# Run "docker compose" instructions with custom configuration.
#
# As this is for development and testing only,
# the compose commands runs with the .env and compose.yaml files
# required for each environment.
# 

# export COMPOSE_FILE=docker-compose.yml:docker-compose.prod.yml
# export COMPOSE_PROFILES=frontend
# export COMPOSE_ENV_FILES=.env.envfile1, .env.envfile2
export COMPOSE_ENV_FILES=../.env.dev.local

# Helper to find if the project was already created
find_package_lock_json() {
  find ./ -maxdepth 3 -name "package-lock.json" | grep -q "package-lock.json"
}

# Run dev server if the project was created, if not create the project
if [ "$1" == "deploy" ]; then

  if ! find_package_lock_json; then
    # Use this custom service create the frontend DEVELOPMENT stack
    docker compose run --rm create-frontend
  fi
  
  # Start live-reload development server
  docker compose up --watch

  # Nothing else to do...
  exit 0
fi

# If you are here, most likely you want to run a custom compose command
docker compose $@