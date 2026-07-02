import { calculator } from "./calculator";

// Add.
test("It sums two numbers.", () => {
  expect(calculator.sum(4, 5)).toBe(9);
  expect(calculator.sum(-4, 5)).toBe(1);
  expect(calculator.sum(1.3, 1.2)).toBeCloseTo(2.5);
});

// Subtract.
test("It subtracts two numbers.", () => {
  expect(calculator.subtract(10, 7)).toBe(3);
  expect(calculator.subtract(10, -7)).toBe(17);
  expect(calculator.subtract(2.7, 0.2)).toBeCloseTo(2.5);
});

// Multiply.
test("It multiplies two numbers.", () => {
  expect(calculator.multiply(8, 12)).toBe(96);
  expect(calculator.multiply(5, -7)).toBe(-35);
  expect(calculator.multiply(5, 0)).toBe(0);
  expect(calculator.multiply(3, 2.5)).toBeCloseTo(7.5);

});

// Divide.
test("It divides two numbers.", () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(10, -2.5)).toBeCloseTo(-4);
});

test("A number divided by zero returns Infinity.", () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

// Strings.
test("It must return an error if the function takes strings as parameters.", () => {
  expect(() => calculator.sum(2, "7")).toThrow("Error: Parameters are not a Number.")
  expect(() => calculator.subtract("9", 4)).toThrow("Error: Parameters are not a Number.")
  expect(() => calculator.multiply("a", -6)).toThrow("Error: Parameters are not a Number.")
  expect(() => calculator.divide(0, "&")).toThrow("Error: Parameters are not a Number.")
})

// Missing parameters.
test("It must return an error if the function lacks one or both parameters.", () => {
  // No parameters.
  expect(() => calculator.sum()).toThrow("Error: Parameters are missing for the operation.")
  expect(() => calculator.subtract()).toThrow("Error: Parameters are missing for the operation.")
  expect(() => calculator.multiply()).toThrow("Error: Parameters are missing for the operation.")
  expect(() => calculator.divide()).toThrow("Error: Parameters are missing for the operation.")
  // One parameter missing.
  expect(() => calculator.sum(2)).toThrow("Error: Parameters are missing for the operation.")
  expect(() => calculator.subtract(4)).toThrow("Error: Parameters are missing for the operation.")
  expect(() => calculator.multiply(-6)).toThrow("Error: Parameters are missing for the operation.")
  expect(() => calculator.divide(0)).toThrow("Error: Parameters are missing for the operation.")
})

// Note (for the missing parameters section):
// The function must be wrapped in an anonymous function because Jest needs
// to track the exact time the code is executed in order to catch the error.