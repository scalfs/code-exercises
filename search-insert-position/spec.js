const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(searchInsert([1], 1), 0);
    assert.strictEqual(searchInsert([1,3,5,6], 5), 2);
    assert.strictEqual(searchInsert([1,3,5,6], 2), 1);
    assert.strictEqual(searchInsert([1,3,5,6], 7), 4);
  });
});
