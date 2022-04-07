### Description:

Given an array of integers, find the one that appears an odd number of times.<br>
There will always be only one integer that appears an odd number of times.

### Examples

`[7]` should return 7, because it occurs 1 time (which is odd).<br>
`[0]` should return 0, because it occurs 1 time (which is odd).<br>
`[1,1,2]` should return 2, because it occurs 1 time (which is odd).<br>
`[0,1,0,1,0]` should return 0, because it occurs 3 times (which is odd).<br>
`[1,2,2,3,3,3,4,3,3,3,2,2,1]` should return 4, because it appears 1 time (which is odd).

---

<br>

### Clever Solution

```js
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```

^ = means Bitwise XOR operation<br>

To sum up, the solution works based on two of its properties:

Capital letters as A or B or X are the result of a xor operation.<br>

A^A = 0<br>
A^0 = A<br>
A^B^A = B<br>
(repeated numbers nulify themselves)

A^B = C<br>
B^A = C<br>
A^B^C^D = A^D^C^B<br>
(associativity)

A^B^A^C^B = C<br>
(combining them we would have this)

Therefore, if there's numbers at the array that appear an even number of times, they would always nulify themsselves. And since there's only a single number that appears an odd number of times, this one will be the desired result of the function.
