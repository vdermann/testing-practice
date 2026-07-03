import { analyzeArray } from "./analyzeArray";

test("It works with a regular array of numbers.", () => {
  expect(analyzeArray([1,8,3,4,2,6]))
  .toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
  });
});

test("If the input is not an array, or is an empty one, it shows an Error.", () => {
  expect(() => analyzeArray()).toThrow("Error: The inserted value is not an array or is an empty one.");
  expect(() => analyzeArray([])).toThrow("Error: The inserted value is not an array or is an empty one.");
  expect(() => analyzeArray(123)).toThrow("Error: The inserted value is not an array or is an empty one.");
  expect(() => analyzeArray("123")).toThrow("Error: The inserted value is not an array or is an empty one.");
});

test("If the array has invalid non-number characters, it shows an Error.", () => {
  expect(() => analyzeArray([1,"8",3,false,2,6])).toThrow("Error: The inserted array has non-numbers characters.");
  expect(() => analyzeArray([1,7,3,NaN,2,6])).toThrow("Error: The inserted array has non-numbers characters.");
});