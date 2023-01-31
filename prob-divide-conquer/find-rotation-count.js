function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    let mid = Math.floor((low + high) / 2);
    if (arr[high] > arr[mid]) return findRotationCount(arr, low, mid);
    return mid + 1 + findRotationCount(arr, mid + 1, high);
  }
  
  module.exports = findRotationCount;
  