# Makefile

# Variables
# export COMPOSE_FILE=docker-compose.yml:docker-compose.prod.yml
# export COMPOSE_PROFILES=tooling
# export COMPOSE_ENV_FILES=.env.envfile1, .env.envfile2
export COMPOSE_ENV_FILES=../.env,../.env.dev.local
# COMPOSE_PROJECT_NAME=my_project

# Default target
.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  create            Create the project"
	@echo "  dev               Start the development server"
	@echo "  npm               Run NPM commands inside Docker"
	@echo "  npm-install       Install NPM dependencies"
	@echo "  npm-lint          Run linter"
	@echo "  npm-format        Format code"

# Helper function to find package-lock.json
find_package_lock_json = find ./ -maxdepth 3 -name "package-lock.json" | grep -q "package-lock.json"

# Target to create the project
.PHONY: create-project
create:
	@echo "Creating project..."
	@docker compose run --rm create

# Target to start the development server
.PHONY: dev
dev:
	@echo "Starting development server..."
	@if ! $(find_package_lock_json); then \
		docker compose run --rm create; \
	fi
	@docker compose up --watch

# Target to run NPM commands inside Docker
.PHONY: npm
npm:
	@docker compose run --rm npm $(filter-out $@,$(MAKECMDGOALS))

# Target to install NPM dependencies
.PHONY: npm-install
npm-install:
	@echo "Installing NPM dependencies..."
	@docker compose run --rm npm install $(filter-out $@,$(MAKECMDGOALS))

# Target to run linter
.PHONY: npm-lint
npm-lint:
	@echo "Running linter..."
	@docker compose run --rm create-frontend npm run lint .

# Target to format code
.PHONY: npm-format
npm-format:
	@echo "Formatting code..."
	@docker compose run --rm npm format

# Target to run custom Docker Compose commands
.PHONY: docker-compose
docker-compose:
	@docker compose $(filter-out $@,$(MAKECMDGOALS))

# Prevent Make from interpreting arguments as targets
%:
	@:

# Ignore options passed to make
MAKEFLAGS += --no-print-directory