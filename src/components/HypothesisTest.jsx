import { tTest } from '../utils/stats';

export default function HypothesisTest({ data }) {
  const result = tTest(data);

  return (
    <div>
      <h3>Hypothesis Test Result</h3>
      <p>t-statistic: {result.t.toFixed(2)}</p>
      <p>p-value: {result.p.toFixed(4)}</p>
      <p>{result.p < 0.05 ? 'Reject Null Hypothesis — PMs matter!' : 'Fail to Reject Null — PMs may not matter.'}</p>
    </div>
  );
}