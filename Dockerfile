FROM node:18 AS base

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
WORKDIR /app

RUN npm install -g pnpm@8.6.x

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install

COPY astro.config.mjs tsconfig.json tailwind.config.cjs ./
COPY public/ public/
COPY src/ src/
# for sentry auto version
COPY .git/ .git/
RUN pnpm build

FROM node:18 AS final

ENV HOST="0.0.0.0"
EXPOSE 3000

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist

VOLUME /app/dist/client

ENTRYPOINT ["node", "./dist/server/src/pages/info/entry._ip_.astro.mjs"]
