---
title: Redis Lando Plugin
description: Add a highly configurable redis service to Lando for local development with all the power of Docker and Docker Compose.
next: ./config.html
---

# Redis

[Redis](https://redis.io/) is an open source, in-memory and typed data structure store, used as a database, cache and message broker.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/config/services.html) top-level config in your [Landofile](https://docs.lando.dev/config/lando.html).

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
*   [custom](https://docs.lando.dev/config/services.html#advanced)

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

## Custom Installation

This plugin is included with Lando by default. That means if you have Lando version `3.0.8` or higher then this plugin is already installed!

However if you would like to manually install the plugin, update it to the bleeding edge or install a particular version then use the below. Note that this installation method requires Lando `3.5.0+`.

:::: code-group
::: code-group-item DOCKER
```bash:no-line-numbers
# Ensure you have a global plugins directory
mkdir -p ~/.lando/plugins

# Install plugin
# NOTE: Modify the "yarn add @lando/redis" line to install a particular version eg
# yarn add @lando/redis@0.5.2
docker run --rm -it -v ${HOME}/.lando/plugins:/plugins -w /tmp node:14-alpine sh -c \
  "yarn init -y \
  && yarn add @lando/redis --production --flat --no-default-rc --no-lockfile --link-duplicates \
  && yarn install --production --cwd /tmp/node_modules/@lando/redis \
  && mkdir -p /plugins/@lando \
  && mv --force /tmp/node_modules/@lando/redis /plugins/@lando/redis"

# Rebuild the plugin cache
lando --clear
```
:::
::: code-group-item HYPERDRIVE
```bash:no-line-numbers
# @TODO
# @NOTE: This doesn't actaully work yet
hyperdrive install @lando/redis
```
::::

You should be able to verify the plugin is installed by running `lando config --path plugins` and checking for `@lando/redis`. This command will also show you _where_ the plugin is being loaded from.
