## Intro

### About the service

This stack uses vite as bundler and compose watch.

### Instructions


### Create the frontend

```bash
# First change your directory.
cd ./frontend
```

Classic install

```bash
# Creates the development stack for this service
docker compose --env-file ../.env.dev.local run --rm create-frontend

# This is equivalent
# docker compose --env-file ../.env.dev.local run --rm npm create vite@latest . && npm install --include dev --verbose

```

With the script

```bash
# Make it executable (first time).
chmod +x ./docker-compose.sh

# "Deploy" will start the development server or create it and then launch it.
./docker-compose.sh deploy
# The app will be listening at localhost:3000
```

#### Working the service

Installing dependencies

```bash
# For example, try installing "prettier"
docker compose --env-file ../.env.dev.local run --rm npm install --save-dev prettier

# You can also use the script
./docker-compose.sh run --rm npm install --save-dev prettier
```

The stack includes other tools too

```bash
# Like NODE
docker compose --env-file ../.env.dev.local run --rm node --version

# ./docker-compose.sh run --rm node --version
```

#### Deploying dev stack

Spin up a development / testing environment

```bash
docker compose --env-file ../.env.dev.local up --watch

# Or use the script
./docker-compose.sh deploy
```

The app will be listening at localhost:3000