const lastStoneWeight = (stones) => {
  if (stones.length <= 1) return stones[0] || 0;

  const sortedStones = stones.sort((a, b) => a - b);
  const stone1 = sortedStones.pop();
  const stone2 = sortedStones.pop();
  const smashResult = Math.abs(stone1 - stone2);

  if (smashResult) sortedStones.push(smashResult);
  return lastStoneWeight(sortedStones);
};
