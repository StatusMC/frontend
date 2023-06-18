# StatusMC Frontend

## Self-hosting

We use Docker containers to host the app, so self-hosting is easy. You must know what is Docker and
how to work with it. If you don't, please read [this](https://docs.docker.com/get-started/).

Our Docker image is available as `docker.io/statusmc/frontend:latest` (or just `statusmc/frontend`).
There is nothing to configure except for reverse-proxy (consult with google about what is it).
I recommend using [Caddy](https://caddyserver.com/) as it is easy to configure and use than nginx.

Reverse-proxy must go separately from the app, so you need to run it in a separate container or
without container. You can always contact us if you need some help!
