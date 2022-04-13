const n = (digit) => (op) => op ? op(digit) : digit;

const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

const plus = (d) => (l) => l + d;
const minus = (d) => (l) => l - d;
const times = (d) => (l) => l * d;
const dividedBy = (d) => (l) => Math.floor(l / d);
