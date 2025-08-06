export function tTest(data) {
  const groupA = data.filter(d => d.pmPresent).map(d => d.score);
  const groupB = data.filter(d => !d.pmPresent).map(d => d.score);

  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  const stdDev = arr => {
    const m = mean(arr);
    return Math.sqrt(arr.reduce((sum, val) => sum + (val - m) ** 2, 0) / (arr.length - 1));
  };

  const meanA = mean(groupA);
  const meanB = mean(groupB);
  const sdA = stdDev(groupA);
  const sdB = stdDev(groupB);

  const nA = groupA.length;
  const nB = groupB.length;

  const se = Math.sqrt((sdA ** 2) / nA + (sdB ** 2) / nB);
  const t = (meanA - meanB) / se;

  // Approximate p-value (two-tailed)
  const p = 2 * (1 - normalCDF(Math.abs(t)));

  return { t, p };
}

function normalCDF(x) {
  return (1 + erf(x / Math.sqrt(2))) / 2;
}

function erf(x) {
  // Approximation of error function
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736,
        a3 = 1.421413741, a4 = -1.453152027,
        a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}