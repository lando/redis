---
title: Redis Lando Plugin
description: Add a highly configurable redis service to Lando for local development with all the power of Docker and Docker Compose.
next: ./config.html
---

# Redis

[Redis](https://redis.io/) is an open source, in-memory and typed data structure store, used as a database, cache and message broker.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/lando-service.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

```yaml
services:
  myservice:
    type: redis
```

## Supported versions

*   [7](https://hub.docker.com/_/redis)
*   [7.0](https://hub.docker.com/_/redis)
*   [6](https://hub.docker.com/_/redis)
*   [6.0](https://hub.docker.com/_/redis)
*   **[5](https://hub.docker.com/_/redis)** **(default)**
*   [5.0](https://hub.docker.com/_/redis)
*   [4](https://hub.docker.com/_/redis)
*   [4.0](https://hub.docker.com/_/redis)
*   [2.8](https://hub.docker.com/_/redis)
*   [custom](https://docs.lando.dev/core/v3/lando-service.html#overrides)

## Patch versions

::: warning Not officially supported!
While we allow users to specify patch versions for this service, they are not *officially* supported, so if you use one, YMMV.
:::

To use a patch version, you can do something as shown below:

```yaml
services:
  myservice:
    type: redis:4.0.12
```

