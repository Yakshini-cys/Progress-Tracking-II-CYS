import{ add,subtract } from './Calc'
test('addition',()=>{
    expect(add(6,5)).toBe(11);
    expect(add(-6,-4)).toBe(-10);
    expect(add(1,-1)).toBe(0);
});
test('subtraction',()=>{
    expect(subtract(6,5)).toBe(1);
    expect(subtract(-6,-4)).toBe(-2);
    expect(subtract(1,-1)).toBe(2);
});