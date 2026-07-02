import { capitalize } from "./capitalize";

test("'vasudeva' should become 'Vasudeva'", () => {
  expect(capitalize("vasudeva")).toBe("Vasudeva");
});

test("'Vasudeva' should stay as 'Vasudeva'", () => {
  expect(capitalize("Vasudeva")).toBe("Vasudeva");
});

test("It should also work with multiple words.", () => {
  expect(capitalize("string with multiple words")).toBe("String with multiple words");
});

test("An empty string is okay.", () => {
  expect(capitalize("")).toBe("");
});

test("Numbers as string can't be capitalized, should stay the same.", () => {
  expect(capitalize("123fas4")).toBe("123fas4");
});

test("Extra characters can't be capitalized, should stay the same.", () => {
  expect(capitalize("&(/4214afs&%)")).toBe("&(/4214afs&%)");
});

test("A Number as an input should be an invalid input.", () => {
  expect(capitalize(1234)).toBe("Invalid input.");
});

test("null, undefined, false and passing no value should be invalid.", () => {
  expect(capitalize()).toBe("Invalid input.");
  expect(capitalize(null)).toBe("Invalid input.");
  expect(capitalize(undefined)).toBe("Invalid input.");
  expect(capitalize(false)).toBe("Invalid input.");
});