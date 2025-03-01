const calculator = require('./calculator');

// Pruebas para la función add
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Pruebas para la función divide
test('divide 6 by 3 to equal 2', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('divide by 0 should return Infinity', () => {
  expect(calculator.divide(6, 0)).toBe(Infinity); // O el valor que prefieras para la división por cero
});

// Pruebas para la función multiply
test('multiply 2 by 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('multiply 5 by 0 to equal 0', () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});