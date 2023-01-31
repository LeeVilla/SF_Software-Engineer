function findFloor(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === num) return arr[mid];
  if (num < arr[mid]) {
    if (mid > 0 && arr[mid - 1] <= num) return arr[mid - 1];
    return findFloor(arr, num, low, mid - 1);
  }
  return findFloor(arr, num, mid + 1, high);
}

module.exports = findFloor;
