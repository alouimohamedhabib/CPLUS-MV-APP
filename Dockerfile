# Use node:20-alpine as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
# RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
EXPOSE 3000

# Development stage
FROM base AS dev
ENV NODE_ENV=development
RUN yarn install
COPY . .

