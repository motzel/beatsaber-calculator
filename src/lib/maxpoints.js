export default function maxPoints(n, maxScorePerBlock) {
  // first 14 blocks is arithmetic sequence
  // then for each block we get 8 * maxScorePerBlock
  return Math.floor(
      (n > 14 ? maxScorePerBlock * 8 * (n - 14) : 0) +
      (n >= 7 ? maxScorePerBlock * 4 * (Math.min(n, 14) - 6) : 0) +
      (n >= 3 ? maxScorePerBlock * 2 * (Math.min(n, 6) - 2) : 0) +
      Math.min(n, 2) * maxScorePerBlock
  );
}
