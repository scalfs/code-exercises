const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
  });
});
