const codeCharset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

// Create map character to index.
const codeMap = codeCharset.reduce((r, c, i) => {
    r.set(c, i);
    return r;
}, new Map());

// Encode integer to base62.
const encode = (id) => {
    // Prevent from silently failing in case of negative numbers.
    if (id < 0) {
        throw new Error('The number is negative, this is not supported.');
    }

    // Prevent from silently failing in case of non rounded number.
    if (!Number.isInteger(id)) {
        throw new Error('The number is not an integer, only integers are supported.');
    }

    // Prevent from silently failing in case of large numbers which may not be safe.
    if (id > Number.MAX_SAFE_INTEGER) {
        throw new Error('Number id is too large for this implementation!');
    }

    const base = codeCharset.length;
    let value = id;
    let result = '';
    let reminder;

    // Divide off value with base until value reaches zero.
    while (value > 0) {
        reminder = value % base;                    // Calculate reminder of division with base.
        value = Math.floor(value / base);           // Divide with base, cutting off the decimals/reminder.
        result = codeCharset[reminder] + result;    // Lookup character/digit based on reminder and add to result.
    }

    // Return result, handling special case - value of zero.
    return result.length === 0 ? '0' : result;
};

// Get value of character/digit.
const getValue = c => codeMap.get(c);

// Encode integer to base62.
const decode = (hash) => {
    const chars = hash.split('');
    const base = codeCharset.length;

    // Decode hash to integer.
    const value = chars.reduce((r, c, i) => {
        const value = getValue(c);
        const pos = i + 1;

        // Accumulate each (digitValue * 62^position).
        const nextValue = r + value * Math.pow(base, chars.length - pos);

        // Throw if unsafe.
        if(nextValue > Number.MAX_SAFE_INTEGER) {
            throw new Error('Maximum value for this implementation (2^53 − 1) reached.');
        }

        return nextValue;
    }, 0);

    return value;
};

module.exports = {
    encode,
    decode,
};