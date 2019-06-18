// Make list of unique items.
export const uniqueBy = (list, getKey) => {
    const set = new Set([]);
    return list.filter(item => {
        const key = getKey(item);
        if (!set.has(key)) {
            set.add(key);
            return true;
        } else {
            return false;
        }
    });
};