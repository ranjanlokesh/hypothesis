import React, { useState } from 'react';
import DataInput from './components/DataInput';
import FileUpload from './components/FileUpload';
import DataTable from './components/DataTable';
import HypothesisTest from './components/HypothesisTest';

export default function App() {
  const [data, setData] = useState([]);

  const handleAdd = (entry) => setData([...data, entry]);

  const handleUpload = (uploadedData) => setData([...data, ...uploadedData]);

  return (
    <div style={{ 
      padding: '2rem',
      fontFamily: 'Arial',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>

      <h2>📈 Hypothesis Testing for IT Project Success</h2>

      <section>
        <h3>➕ Manual Data Entry</h3>
        <DataInput onAdd={handleAdd} />
      </section>

      <section>
        <h3>📁 Upload Data</h3>
        <FileUpload onUpload={handleUpload} />
      </section>

      <section>
        <h3>🔍 Data Table</h3>
        <DataTable data={data} />
      </section>

      {data.length >= 2 && (
        <section>
          <h3>🧪 Hypothesis Test</h3>
          <HypothesisTest data={data} />
        </section>
      )}
    </div>
  );
}