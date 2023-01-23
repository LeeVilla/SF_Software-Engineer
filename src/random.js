function choice(arr) {
  let randIDX = Math.floor(Math.random() * arr.length);
  return arr[randIDX];
}

export { choice };
