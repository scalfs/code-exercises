function moveZeros(arr) {
  const zerosList = arr.filter((element) => element === 0);
  return arr.filter((element) => element !== 0).concat(zerosList);
}
