import React from 'react';

export default function DataTable({ data }) {
  if (data.length === 0) return <p>No data available. Please enter or upload.</p>;

  return (
    <table border="1" cellPadding="8" style={{ marginTop: '1rem', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>PM Present</th>
          <th>Success Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{entry.pmPresent ? 'Yes' : 'No'}</td>
            <td>{entry.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}