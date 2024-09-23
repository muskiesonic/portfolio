# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=22.5.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
# ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --link package-lock.json package.json tsconfig.json ./
RUN npm ci

# Install frontend node modules
COPY --link frontend/package-lock.json frontend/package.json ./frontend/
RUN cd frontend && npm ci

# Copy application code
COPY --link . .

# Build Express.js Server
RUN npm run build

# Change to frontend directory and build the frontend app
WORKDIR /app/frontend
RUN npm run build
# Remove all files in frontend except for the dist folder
RUN find . -mindepth 1 ! -regex '^./dist\(/.*\)?' -delete


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]
