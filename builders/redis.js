'use strict';

// Modules
const _ = require('lodash');
const path = require('path');

// Builder
module.exports = {
  name: 'redis',
  config: {
    version: '5',
    supported: ['7', '7.0', '6', '6.0', '5', '5.0', '4', '4.0', '2.8'],
    patchesSupported: true,
    confSrc: path.join(__dirname, '..', 'config'),
    persist: false,
    port: '6379',
    password: '',
    defaultFiles: {
      server: 'redis.conf',
    },
    remoteFiles: {
      server: '/usr/local/etc/redis/redis.conf',
    },
  },
  parent: '_service',
  builder: (parent, config) => class LandoRedis extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);
      const redis = {
        image: `redis:${options.version}`,
        command: 'docker-entrypoint.sh redis-server /usr/local/etc/redis/redis.conf',
        volumes: [
          `${options.confDest}/${options.defaultFiles.server}:${options.remoteFiles.server}`,
        ],
      };
      // Add in password.
      if (!_.isEmpty(options.password)) redis.command = `${redis.command} --requirepass ${options.password}`;
      // Set persistence to true
      if (options.persist) redis.command = `${redis.command} --appendonly yes`;
      // Send it downstream
      super(id, options, {services: _.set({}, options.name, redis)});
    };
  },
};
