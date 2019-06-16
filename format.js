const {
    PORT,
} = process.env;

const formatResponse = (req, hash) => req.hostname === 'localhost'
    ? `${req.protocol}://${req.hostname}:${PORT}/${hash}`
    : `${req.protocol}://${req.hostname}/${hash}`;

module.exports = {
    formatResponse,
};