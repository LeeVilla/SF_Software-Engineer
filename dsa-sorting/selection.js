const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
};

module.exports = selectionSort;
