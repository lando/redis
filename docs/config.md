---
title: Configuration
description: Learn how to configure the Lando Redis service.
---

# Configuration

Here are the configuration options, set to the default values, for this service. If you are unsure about where this goes or what this means, we *highly recommend* scanning the [services documentation](https://docs.lando.dev/config/services.html) to get a good handle on how the magicks work.

Also note that the below options are in addition to the [build steps](https://docs.lando.dev/config/services.html#build-steps) and [overrides](https://docs.lando.dev/config/services.html#overrides) that are available to every service.

```yaml
services:
  myservice:
    type: redis:5
    persist: false
    portforward: false
    password: ''
    config:
      server: SEE BELOW
```

## Persisting data

This option is pretty straightforward. Use `persist: true` to persist the cache's data between restarts and rebuilds.

## Port forwarding

`portforward` will allow you to access this service externally by assigning a port directly on your host's `localhost`. Note that `portforward` can be set to either `true` or a specific `port` but we *highly recommend* you set it to `true` unless you have pretty good knowledge of how port assignment works or you have a **very** compelling reason for needing a locked down port.

`portforward: true` will prevent inevitable port collisions and provide greater reliability and stability across Lando apps. That said, one downside of `portforward: true` is that Docker will assign a different port every time you restart your application. You can read more about accessing services externally [over here](https://docs.lando.dev/guides/external-access.html).

`tl;dr`

**Recommended**

```yaml
services:
  myservice:
    type: redis
    portforward: true
```

**Not recommended**

```yaml
services:
  myservice:
    type: redis
    portforward: 6379
```

## Setting a Password

Later versions of Redis require a non-blank password being set; provide a password for your redis instance using the `creds` option:

```yaml
services:
  myservice:
    type: redis
    password: womprat-slayer
```

Note that you'll likely need to provide this password along with other Redis details to your application so it can connect to Redis. Typically this is done through environmental variables.

Do not use this option if you use a custom `redis.conf` that defines a default user password.

## Using a custom redis.conf

You may need to override our [default redis server config](https://github.com/lando/redis/tree/main/services/redis) with your own [custom redis config file](https://redis.io/topics/config).

If you do this, you must use a file that exists inside your application and express it relative to your project root as shown below:

**A hypothetical project**

Note that you can put your configuration files anywhere inside your application directory. We use a `config` directory in the below example but you can call it whatever you want such as `.lando`.

```bash
./
|-- config
   |-- redis.conf
|-- .lando.yml
```

**Landofile's redis config**

```yaml
services:
  myservice:
    type: redis
    config:
      server: config/redis.conf
```

## Getting information

You can get connection and credential information about your redis instance by running [`lando info`](https://docs.lando.dev/cli/info.html). It may also be worth checking out our [accessing services externally guide](https://docs.lando.dev/guides/external-access.html).
