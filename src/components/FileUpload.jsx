import Papa from 'papaparse';

export default function FileUpload({ onUpload }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const cleaned = results.data.map(row => ({
          pmPresent: row.PM_Present === 'Yes',
          score: parseFloat(row.Success_Score)
        }));
        onUpload(cleaned);
      }
    });
  };

  return <input type="file" accept=".csv" onChange={handleFile} />;
}