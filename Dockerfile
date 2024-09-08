# Use node:20-alpine as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
# RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
EXPOSE 3000

# Builder stage
FROM base AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
# For a production environment using next start, it is strongly recommended you install sharp.
RUN yarn add sharp

RUN yarn build

# Production stage
FROM base AS prod
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp
RUN yarn install --frozen-lockfile --production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
# COPY --from=builder /app/types /app/types
# COPY --from=builder /app/src/lib /app/src/lib
COPY --from=builder /app/next.config.mjs /app/next.config.mjs


# Change ownership of the application files to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs

ENTRYPOINT ["/bin/sh", "-c", "yarn start"]

# Development stage
FROM base AS dev
ENV NODE_ENV=development
RUN yarn install
COPY . .
RUN npx prisma generate
