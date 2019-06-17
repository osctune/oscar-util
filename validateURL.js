const { URL } = require('url');

const validateURL = url => {
    new URL(url);
};

module.exports = validateURL;