FROM mcr.microsoft.com/devcontainers/javascript-node

RUN corepack enable && \
    corepack prepare yarn@stable --activate && \
    yarn set version stable

WORKDIR /workspaces/perchun.it
