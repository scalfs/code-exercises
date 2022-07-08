function digPow(n, p) {
  const sum = String(n)
    .split("")
    .reduce((total, dig, i) => total + dig ** (p + i), 0);
  return sum % n ? -1 : sum / n;
}
