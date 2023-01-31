function sortedFrequency(arr, num) {
  const firstIdx = binarySearch(arr, num, true);
  if (firstIdx === -1) return -1;
  const lastIdx = binarySearch(arr, num, false);
  return lastIdx - firstIdx + 1;
}

function binarySearch(arr, num, isFirst) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      if (isFirst) {
        if (mid === 0 || arr[mid - 1] !== num) return mid;
        high = mid - 1;
      } else {
        if (mid === arr.length - 1 || arr[mid + 1] !== num) return mid;
        low = mid + 1;
      }
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

module.exports = sortedFrequency;
