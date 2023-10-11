FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@8.9.0 --activate
WORKDIR /app

FROM base AS build
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm install --frozen-lockfile
COPY tailwind.config.js postcss.config.js next.config.mjs src ./
RUN pnpm build

FROM base AS production
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY --from=build /app/.next/ ./.next/
ENTRYPOINT ["pnpm", "start"]
