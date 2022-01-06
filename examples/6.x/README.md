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
# Should use 6.x as the default version
lando ssh -s defaults -c "redis-server --version | grep v=6."

# Should be able to connect to redis
lando ssh -s defaults -c "redis-cli CONFIG GET databases"

# Should use the user specifiec patch version if given
lando ssh -s patch -c "redis-server --version | grep v=6.0.15"

# Should include the redis-cli
lando ssh -s defaults -c "redis-cli --version"
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
