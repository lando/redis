# Redis Lando Plugin

This is the _official_ [Lando](https://lando.dev) plugin for [Redis](https://redis.io/). When installed it...

* Allows users to run various `redis` versions including the latest Redis 8.x series

Of course, once a user is running their Redis project with Lando they can take advantage of [all the other awesome development features](https://docs.lando.dev) Lando provides.

## Basic Usage

Add a `redis` service to your Landofile

```yaml
services:
  myservice:
    type: redis:7.4
```

For more info you should check out the [docs](https://docs.lando.dev/redis):

* [Getting Started](https://docs.lando.dev/redis/)
* [Configuration](https://docs.lando.dev/redis/config.html)
* [Examples](https://github.com/lando/redis/tree/main/examples)
* [Development](https://docs.lando.dev/redis/development.html)

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando).

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/redis/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/redis/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/redis/releases).


## Maintainers

* [@pirog](https://github.com/pirog)
* [@reynoldsalec](https://github.com/reynoldsalec)

## Contributors

<a href="https://github.com/lando/redis/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/redis" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Selected Resources

* [LICENSE](/LICENSE)
* [TERMS OF USE](https://docs.lando.dev/terms)
* [PRIVACY POLICY](https://docs.lando.dev/privacy)
* [CODE OF CONDUCT](https://docs.lando.dev/coc)

