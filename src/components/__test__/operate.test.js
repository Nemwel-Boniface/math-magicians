import operate from '../../logic/operate';

describe('Test the Sum', () => {
  test('test  1 + 2 ', () => {
    const sum = operate(1, 2, '+');
    expect(sum).toBe('3');
  });

  test('test 15 + 1030', () => {
    const sum = operate(15, 1030, '+');
    expect(sum).toBe('1045');
  });
});

describe('Test the Sub', () => {
  test('test 52 - 6', () => {
    const sub = operate(52, 6, '-');
    expect(sub).toBe('46');
  });

  test('test 10 - 25', () => {
    const sub = operate(10, 25, '-');
    expect(sub).toBe('-15');
  });
});

describe('Test devision', () => {
  test('test 20 ÷ 0', () => {
    const dev = operate(10, 0, '÷');
    expect(dev).toBe('Can\'t divide by 0.');
  });

  test('test 20 ÷ 10', () => {
    const dev = operate(20, 10, '÷');
    expect(dev).toBe('2');
  });
});

describe('Test remainder', () => {
  test('test 15 % 0', () => {
    const remain = operate(15, 0, '%');
    expect(remain).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

describe('Test MultiplicAtion', () => {
  test('test 15 x 0', () => {
    const mul = operate(15, 0, 'x');
    expect(mul).toBe('0');
  });
  test('test 100 x 100', () => {
    const mul = operate(100, 100, 'x');
    expect(mul).toBe('10000');
  });
});
