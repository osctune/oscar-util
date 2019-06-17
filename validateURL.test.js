const validateURL = require('./validateURL');

describe('validateURL', () => {
    it('throws on invalid URLs', () => {
        expect(() => validateURL('invalid')).toThrow();
    });
});