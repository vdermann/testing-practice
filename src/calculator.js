export const calculator = {
  sum(a = null, b = null) {
    if (a === null || b === null) throw new Error("Error: Parameters are missing for the operation.");
    return a + b;
  },

  subtract(a = null, b = null) {
    if (a === null || b === null) throw new Error("Error: Parameters are missing for the operation.");
    return a - b;
  },
  multiply(a = null, b = null) {
    if (a === null || b === null) throw new Error("Error: Parameters are missing for the operation.");
    return a * b;
  },
  divide(a = null, b = null) {
    if (a === null || b === null) throw new Error("Error: Parameters are missing for the operation.");
    return a / b;
  },
}