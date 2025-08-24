import { useEffect, useState } from 'react';

function SheetTable({ sheetId, gid }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  // Google Sheets CSV export URL pattern
  const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  useEffect(() => {
    setLoading(true);
    fetch(csvUrl)
      .then((res) => res.text())
      .then((csv) => {
        const rows = csv.split('\n').map(row => row.split(','));
        setData(rows);
        setPage(1);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch sheet data.');
        setLoading(false);
      });
  }, [csvUrl]);

  if (loading) return <div>Loading sheet data...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!data.length) return <div>No data found.</div>;

  // Pagination logic
  const totalRows = data.length - 1;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIdx = (page - 1) * rowsPerPage + 1;
  const endIdx = Math.min(startIdx + rowsPerPage - 1, data.length - 1);
  const pageRows = data.slice(startIdx, endIdx + 1);

  return (
    <div style={{ marginTop: '2rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f9f9f9', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr>
            {data[0].map((cell, idx) => (
              <th key={idx} style={{ padding: '0.75rem', background: '#232b3e', color: '#fff', fontWeight: 'bold', borderBottom: '2px solid #3a4668' }}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageRows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} style={{ padding: '0.75rem', borderBottom: '1px solid #e0e0e0', color: '#232b3e' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem', gap: '0.5rem' }}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', background: page === 1 ? '#ccc' : '#232b3e', color: '#fff', cursor: page === 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >Prev</button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: '6px',
                border: 'none',
                background: page === idx + 1 ? '#ffd700' : '#232b3e',
                color: page === idx + 1 ? '#232b3e' : '#fff',
                fontWeight: page === idx + 1 ? 'bold' : 'normal',
                cursor: 'pointer',
                boxShadow: page === idx + 1 ? '0 2px 8px rgba(50,60,90,0.10)' : 'none',
              }}
            >{idx + 1}</button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', background: page === totalPages ? '#ccc' : '#232b3e', color: '#fff', cursor: page === totalPages ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >Next</button>
        </div>
      )}
    </div>
  );
}

export default SheetTable;
