// when object its called it returns the appropriate value
const Chars = require('../data/CharacterStats');
function getStats() {
    return CharacterStats.Brute.level1;
}

test('Expect value to be 12', () => {
    expect(getStats).toBe(12);
});
