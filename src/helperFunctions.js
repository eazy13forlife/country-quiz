//returns a random index from an array
const getRandomIndex = (start = 0, end) => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

//swaps indices in an array
const swap = (array, index1, index2) => {
  let value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

//returns a new array of randomizedOrder
const getRandomizedArray = (originalArray) => {
  const originalArrayCopy = [...originalArray];
  for (let i = originalArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(originalArrayCopy, randomIndex, i);
  }
  return originalArrayCopy;
};

//shuffles an array in place
const randomizeArray = (originalArray) => {
  for (let i = originalArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(originalArray, randomIndex, i);
  }
};

//returns

export { getRandomIndex, getRandomizedArray, randomizeArray, swap };
