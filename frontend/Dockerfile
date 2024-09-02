ARG NODE_VERSION=lts
ARG NGINX_VERSION=stable

# Build static files
FROM node:${NODE_VERSION}-alpine AS builder

ENV CI=true
ENV NODE_ENV=production

# Build the image an run the container as non-provileged
USER node

WORKDIR /app

RUN --mount=type=bind,source=./frontend/package.json,target=package.json \
    --mount=type=bind,source=./frontend/package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

# Copy the rest of the source files into the image.
COPY --chown=node:node ./frontend .

RUN npm run build


# Run the http proxy server and serve the static files
FROM nginx:${NGINX_VERSION}-alpine

COPY --from=builder /app/dist /usr/share/nginx/html