# StatusMC Frontend

This is the frontend for StatusMC. It is written in TypeScript and uses [Astro](https://astro.build)
as a framework. This was kind of wrong choice, but it is too late to change it. Why? Because Astro
is intended to use for *static* sites, and we have at least one dynamic page (the results page,
other pages are pre-rendered).

Because of this, our frontend doesn't support SPA (Single Page Application) mode. And the results
page is slow. Although, for our project it's not so critical.

## Self-hosting

We use Docker containers to host the app, so self-hosting is easy. You must know what is Docker and
how to work with it. If you don't, please read [this](https://docs.docker.com/get-started/).

Our Docker image is available as `docker.io/statusmc/frontend:latest` (or just `statusmc/frontend`).
There is nothing to configure except for reverse-proxy (consult with google about what is it).
I recommend using [Caddy](https://caddyserver.com/) as it is easy to configure and use than nginx.

Reverse-proxy must go separately from the app, so you need to run it in a separate container or
without container. You can always contact us if you need some help!

We don't use free hostings like Vercel or Netlify because they have Serverless architecture, which
works quite bad with Astro's SSR (Server-Side Rendering) for dynamic pages (it rendered 5 seconds
on Vercel, now it claims only half a second!).
