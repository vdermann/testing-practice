export const reverseString = (string) => {
  if (typeof string !== "string") return "Invalid input.";
  if (string) {
    return string.split("").reverse().join("");
  }
  return "";
}