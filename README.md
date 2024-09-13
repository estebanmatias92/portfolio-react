# Frontend Stack with Vite

Blank installation of **NodeJS** with **Vite** [(\*)](https://vitejs.dev/), this is a monorepository to work/practice with javascript frontend technologies.

## About the stack

- It is built on **Docker Compose** [(\*)](https://docs.docker.com/compose/compose-application-model/)
- Has a **[frontend](./frontend/compose.yaml)** service defined
- The service has **Vite** bundler installed by default

## Instructions

To work in **development** environment, move to **[frontend](./frontend/) directory** and follow the **[README](./frontend/README.frontend.md) instructions**

To deploy in **production**, read below.

### Deploying the app

Spin up a **_staging_ / _prod_** environment

```bash
docker compose up
```

The app will be listening at **localhost:80**
