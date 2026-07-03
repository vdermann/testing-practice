import { caesarCipher } from "./caesarCipher";

test("It encrypts a single word.", () => {
  expect(caesarCipher("Hermann", 3)).toBe("Khupdqq");
})

test("It encrypts a string with multiples words.", () => {
  expect(caesarCipher("Vasudeva the ferryman", 3)).toBe("Ydvxghyd wkh ihuubpdq");
})

test("The shifted lettercase should follow the original lettercase.", () => {
  expect(caesarCipher("SiddHArTA", 4)).toBe("WmhhLEvXE");
})

test("Punctuation, spaces, and other non-alphabetical characters should remain unchanged.", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("It wraps from 'z' to 'a'.", () => {
  expect(caesarCipher("xyz", 4)).toBe("bcd");
})

test("It works in reverse, with a negative key.", () => {
  expect(caesarCipher("xyz", -3)).toBe("uvw");
})

test("It works in reverse, with a negative key starting with 'a'.", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
})

test("It must return an error if the function lacks of a string to encrypt.", () => {
  expect(() => caesarCipher("", 2)).toThrow("Error: A string is missing for the encryption.")
  expect(() => caesarCipher(123, 2)).toThrow("Error: A string is missing for the encryption.")
  expect(() => caesarCipher(false, 2)).toThrow("Error: A string is missing for the encryption.")
  expect(() => caesarCipher(undefined, 2)).toThrow("Error: A string is missing for the encryption.")
})

test("It must return an error if the key is not a number.", () => {
  expect(() => caesarCipher("abc", "2")).toThrow("Error: The key is not a Number.")
  expect(() => caesarCipher("abc", "fgh")).toThrow("Error: The key is not a Number.")
  expect(() => caesarCipher("abc", true)).toThrow("Error: The key is not a Number.")
  expect(() => caesarCipher("abc", null)).toThrow("Error: The key is not a Number.")
})