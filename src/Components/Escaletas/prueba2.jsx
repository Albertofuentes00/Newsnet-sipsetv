import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Table = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'Row 1', age: 25 },
    { id: 2, name: 'Row 2', age: 30 },
    { id: 3, name: 'Row 3', age: 28 },
  ]);

  const [indicator, setIndicators] = useState([
    {text: 'SAMPLE TEXT' }
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      name: `Row ${rows.length + 1}`,
      age: 0, // You can set default values for new rows here
      text: 'This is a custom text', // Adding custom text for this row
    };

    setRows([...rows, newRow]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Table;