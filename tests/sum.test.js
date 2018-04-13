import sum from '../src/sum'

test('sum must add two numbers', () => {
    expect(sum(5, 4)).toBe(9)
})
