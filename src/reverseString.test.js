import { reverseString } from "./reverseString";

test("'vasudeva' should become 'avedusav'", () => {
  expect(reverseString("vasudeva")).toBe("avedusav");
});

test("Should reverse with capital letters: 'VasuDEva' to 'avEDusaV'", () => {
  expect(reverseString("VasuDEva")).toBe("avEDusaV");
});

test("It should also work with multiple words.", () => {
  expect(reverseString("string with multiple words")).toBe("sdrow elpitlum htiw gnirts");
});

test("An empty string is okay.", () => {
  expect(reverseString("")).toBe("");
});

test("Should reverse numbers and special characters.", () => {
  expect(reverseString("123&%#!=456")).toBe("654=!#%&321");
});


test("A Number as an input should be an invalid input.", () => {
  expect(reverseString(1234)).toBe("Invalid input.");
});

test("null, undefined, false and passing no value should be invalid.", () => {
  expect(reverseString()).toBe("Invalid input.");
  expect(reverseString(null)).toBe("Invalid input.");
  expect(reverseString(undefined)).toBe("Invalid input.");
  expect(reverseString(false)).toBe("Invalid input.");
});