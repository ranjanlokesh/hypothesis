import React, { useState } from 'react';

export default function DataInput({ onAdd }) {
  const [pmPresent, setPmPresent] = useState(true);
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ pmPresent, score: parseFloat(score) });
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        PM Present:
        <select value={pmPresent} onChange={(e) => setPmPresent(e.target.value === 'true')}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>
      <label>
        Success Score:
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} required />
      </label>
      <button type="submit">Add Data</button>
    </form>
  );
}