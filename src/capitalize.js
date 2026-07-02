export const capitalize = (string) => {
  if (typeof string !== "string") return "Invalid input."
  if (string) {
    return string[0].toUpperCase() + string.slice(1);
  } 
  return "";
}