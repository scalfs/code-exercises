function highAndLow(numbers) {
  const numbersArray = numbers
    .split(" ")
    .map((number) => Number.parseInt(number));

  let highest = Number.NEGATIVE_INFINITY;
  let lowest = Number.POSITIVE_INFINITY;

  numbersArray.forEach((number) => {
    if (number > highest) {
      highest = number;
    }
    if (number < lowest) {
      lowest = number;
    }
  });

  return `${highest} ${lowest}`;
}
