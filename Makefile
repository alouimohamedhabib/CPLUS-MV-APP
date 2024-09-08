.PHONY: build up down logs shell clean

# Build the Docker images
build:
	docker compose build

# Start the containers in detached mode
up:
	docker compose up -d

# Stop and remove the containers
down:
	docker compose down

# View the logs of all containers
logs:
	docker compose logs -f

# Open a shell in the fronty container
shell:
	docker compose exec fronty sh

# Remove all containers, networks, and volumes
clean:
	docker compose down -v --rmi all --remove-orphans

# Build and start the containers
start: build up

# Restart the containers
restart: down up

# Run the development environment
dev:
	docker compose up fronty -d

# Run the production environment
prod:
	docker compose up fronty-prod -d
