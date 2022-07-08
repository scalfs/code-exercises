function sortArray(array) {
  const isOdd = (n) => n % 2 !== 0;
  const sortedOdds = array.filter(isOdd).sort((a, b) => a - b);
  return array.map((el) => (isOdd(el) ? sortedOdds.shift() : el));
}
