# Frontend Vite Stack

## About the service

This stack uses **Vite** as bundler and **Compose Watch** [(*)](https://docs.docker.com/compose/file-watch/).

### See the yaml

To see the stack environments:

- Check [compose.yaml](./compose.yaml) for **_base_ / _prod_** config
- Check [compose.override.yaml](./compose.override.yaml) for **_dev_ / _test_** config

## Instructions

### Notes

Running Docker Compose commands for this environment is a hassle...

```bash
# Like getting the project created
docker compose --env-file ../.env --env-file ../.env.dev.local run --rm create

# Or starting up the development stack
docker compose --env-file ../.env --env-file ../.env.dev.local up

# Or simply installing a dependency
docker compose --env-file ../.env --env-file ../.env.dev.local run --rm npm install prettier
```

So i've decided to make a bash script to hide this environment configs from the docker compose commands.

### 1. Create the project

Use the bash script **`./dcompose`**

```bash
# First change your directory.
cd ./frontend

# Make it executable (once).
chmod +x ./dcompose

# Create the development stack
./dcompose create
```

The project is created under **'./web'** directory

### 2. Deploying the stack and working

Spin up a development stack and the server

```bash
# Start the server for development
./dcompose up --watch

# Now the app is listening at localhost:3000
```

Install some dependencies

```bash
# Try installing 'prettier'
./dcompose npm install --save-dev prettier
```

Lint the project files

```bash
# A wrap for 'docker compose run --rm npm'
./dcompose npm run lint
```

## Side notes

- **`./dcompose up`** Will trigger **`./dcompose create`** first i**f there is no package.json** in the project
