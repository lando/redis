Redis Example
=============

This example exists primarily to test the following documentation:

* [Redis Service](https://docs.devwithlando.io/tutorials/redis.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should use the user specified version if given
lando ssh -s custom -c "redis-server --version | grep v=4."

# Should persist data if specified
docker inspect landoredis_custom_1 | grep appendonly

# Should use custom config if specified
lando ssh -s custom -c "redis-cli CONFIG GET databases" | grep 18
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
