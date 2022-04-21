function doneOrNot(rows) {
  const columns = [];
  const sections = [];

  for (let i = 0; i < 9; i++) {
    // initialize a child array
    columns[i] = [];

    for (let j = 0; j < 9; j++) {
      // transpose rows into columns
      columns[i].push(rows[j][i]);

      // push section values
      const k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      sections[k] = sections[k] || [];
      sections[k].push(rows[i][j]);
    }
  }

  // Set data structure removes repeated values
  const isValidSet = (numbers) => new Set(numbers).size === 9;

  return rows.every(isValidSet) &&
    columns.every(isValidSet) &&
    sections.every(isValidSet)
    ? "Finished!"
    : "Try again!";
}
