const isValidArray = (array) => {
  return array.every(element => typeof element === "number" && !Number.isNaN(element));
}

const analyzeArray = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Error: The inserted value is not an array or is an empty one.");
  }

  if (!isValidArray(array)) {
    throw new Error("Error: The inserted array has non-numbers characters.");
  }

  const properties = {
    "average": array.reduce((sum, value) => sum + value, 0) / array.length,
    "length": array.length,
    "max": Math.max(...array),
    "min": Math.min(...array),
  }
  return properties;
}

export { analyzeArray };