export default function maxPoints(n, maxScorePerBlock) {
  // first 7 blocks is arithmetic sequence
  // a1=maxScorePerBlock, r=maxScorePerBlock, sum = (2 * a1 + (n-1) * r) / 2 * n
  // then for each block we get 8 * maxScorePerBlock
  return Math.floor(
    ((2 * maxScorePerBlock + (Math.min(n, 7) - 1) * maxScorePerBlock) / 2) *
      Math.min(n, 7) +
      (n >= 8 ? (n - 7) * maxScorePerBlock * 8 : 0)
  );
}
