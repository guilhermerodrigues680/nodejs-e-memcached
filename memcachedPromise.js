const { promisify } = require('util')
const Memcached = require('memcached')

const memcached = new Memcached('localhost:11211')

module.exports.get = promisify(memcached.get).bind(memcached)
module.exports.set = promisify(memcached.set).bind(memcached)
module.exports.memcached = memcached;
