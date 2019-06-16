const { encode } = require('./base62');

const hash = id => encode(id).padStart(6, '000000');

module.exports = hash;