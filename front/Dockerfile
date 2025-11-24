# ---------- BUILD ----------
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json .
COPY bun.lock .  
RUN bun install

COPY . .
RUN bun run build

# ---------- PROD (NGINX) ----------
FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf





