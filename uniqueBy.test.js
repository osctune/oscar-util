import uniqueBy from './uniqueBy';

describe('uniqueBy', () => {
    it('should return a new list containing only unique items', () => {
        const items = [
            { key: 'a', uid: '1', },
            { key: 'a', uid: '2', },
            { key: 'a', uid: '3', },
            { key: 'b', uid: '4', },
            { key: 'c', uid: '5', },
        ];

        const result = uniqueBy(items, o => o.key);

        expect(result.map(o => o.key)).toStrictEqual(['a', 'b', 'c']);
    });
    it('should preserve order', () => {
        const items = [
            { key: 'a', uid: '1', },
            { key: 'a', uid: '2', },
            { key: 'a', uid: '3', },
            { key: 'b', uid: '4', },
            { key: 'c', uid: '5', },
        ];

        const result = uniqueBy(items, o => o.key);

        expect(result.map(o => o.uid)).toStrictEqual(['1', '4', '5']);
    });
    it('should preserve input list', () => {
        const items1 = [
            { key: 'a', uid: '1', },
            { key: 'a', uid: '2', },
            { key: 'a', uid: '3', },
            { key: 'b', uid: '4', },
            { key: 'c', uid: '5', },
        ];

        const items2 = [
            { key: 'a', uid: '1', },
            { key: 'a', uid: '2', },
            { key: 'a', uid: '3', },
            { key: 'b', uid: '4', },
            { key: 'c', uid: '5', },
        ];

        uniqueBy(items1, o => o.key);

        expect(items2).toStrictEqual(items1);
    });
});