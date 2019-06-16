const { encode, decode } = require('./base62');

describe('encode', () => {
    it('works', () => {
        expect(encode(0)).toBe('0');
        expect(encode(1)).toBe('1');
        expect(encode(61)).toBe('z');
        expect(encode(Math.pow(62, 3) + Math.pow(62, 6))).toBe('1001000');
    });
    it('throws on negative values', () => {
        expect(() => {
            encode(-1);
        }).toThrow();
    });
});

describe('decode', () => {
    it('works', () => {
        expect(decode('0')).toBe(0);
        expect(decode('1')).toBe(1);
        expect(decode('z')).toBe(61);
        expect(decode('1001000')).toBe(Math.round(Math.pow(62, 3) + Math.pow(62, 6)));
    });
    it('throws on unsafe integer', () => {
        expect(() => {
            decode('zzzzzzzzzzzzzzzzzzzzzzzz');
        }).toThrow();
    });
});

describe('encode/decode', () => {
    it('works', () => {
        expect(decode(encode(0))).toBe(0);
        expect(decode(encode(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER);
    });
});