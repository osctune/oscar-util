const hash = require('./hash');

describe('hash', () => {
    it('works', () => {
        expect(hash(0)).toBe('000000');
        expect(hash(1)).toBe('000001');
        expect(hash(62)).toBe('000010');
    });
});