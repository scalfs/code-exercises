function findOdd(A) {
  const occurrences = A.reduce((occursObj, number) => {
    return { ...occursObj, [number]: (occursObj[number] || 0) + 1 };
  }, {});

  for (number in occurrences) {
    if (occurrences[number] % 2 !== 0) return Number(number);
  }
}
