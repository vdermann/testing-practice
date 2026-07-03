const isValidKey = (key) => {
  if (typeof key !== "number") {
    throw new Error("Error: The key is not a Number.")
  }
  return true;
}

const isValidString = (string) => {
  if (typeof string !== "string" || string === "") {
    throw new Error("Error: A string is missing for the encryption.")
  }
  return true;
}

const isUpperCase = (charCode) => {
  return (charCode >= 65 && charCode <= 90) ? true : false;
}

const isLowerCase = (charCode) => {
  return (charCode >= 97 && charCode <= 122) ? true : false;
}

// Main function.
const caesarCipher = (string, key = 3) => {
  isValidKey(key);
  isValidString(string);

  console.log(string)
  string = string.
    split("").
    map((char) => {
      const charCode = char.charCodeAt(0);
      // Formula: (( charCode - base + key ) % 26 + 26) % 26 + base
      // By subtracting the base (65 or 97) from the charCode, we "normalize" the alphabet so that it starts at 0.
      // And by adding (or subtracting) the key we perform the movement we want to make.
      // The module (% 26) "sets" the number within the 0-25 range.
      // We add again its base (65 or 97) to get the letter with ASCII.
      if (isUpperCase(charCode)) {
        let encryptedCode = ((charCode - 65 + key) % 26 + 26) % 26 + 65;
        return String.fromCharCode(encryptedCode);
      }
      if (isLowerCase(charCode)) {
        let encryptedCode = ((charCode - 97 + key) % 26 + 26) % 26 + 97;
        return String.fromCharCode(encryptedCode);
      }

      return char;
    });

  const encryptedString = string.join("");
  return encryptedString;
}

// console.log(caesarCipher("xyz", -3))

export { caesarCipher };