import calculate from '../../logic/calculate';

test('test AC', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  const output = calculate({ total: '5' }, 'AC');
  expect(output).toEqual(obj);
});

test('test " + " button', () => {
  const obj = {
    total: '2',
    next: '15',
    operation: '+',
  };
  const output = calculate(obj, '=');
  expect(output).toEqual({ total: '17', next: null, operation: null });
});

test('test " - " button', () => {
  const obj = {
    total: '100',
    next: '4',
    operation: '-',
  };
  const output = calculate(obj, '=');
  expect(output).toEqual({ total: '96', next: null, operation: null });
});
