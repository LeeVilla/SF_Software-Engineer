function countZeroes() {
    let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

function find0(arr, low = 0, high = arr.length - 1) {
    let mid = low + Math.floor((high - low) / 2);
    if (high < low) return -1;
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) return mid;
    if (arr[mid] === 1) return find0(arr, mid + 1, high);
    return find0(arr, low, mid - 1);
  }
  

module.exports = countZeroes