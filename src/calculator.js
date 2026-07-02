const isValidNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Error: Parameters are not a Number.");
    return false;
  }
  return true;
}

const isNotNull = (a, b) => {
  if (a === null || b === null) {
    throw new Error("Error: Parameters are missing for the operation.");
    return false;
  }
  return true;
}

export const calculator = {
  sum(a = null, b = null) {
    if (isNotNull(a, b) && isValidNumber(a, b)) {
      return a + b;
    }
  },

  subtract(a = null, b = null) {
    if (isNotNull(a, b) && isValidNumber(a, b)) {
      return a - b;
    }
  },
  multiply(a = null, b = null) {
    if (isNotNull(a, b) && isValidNumber(a, b)) {
      return a * b;
    }
  },
  divide(a = null, b = null) {
    if (isNotNull(a, b) && isValidNumber(a, b)) {
      return a / b;
    }
  },
}