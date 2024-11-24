import { useEffect, useState } from 'react';

import styles from './LargeDOM.module.scss';

const generateTableData = (rows: number, cols: number) => {
  return Array.from({ length: rows }, (_, rowIndex) =>
    Array.from(
      { length: cols },
      (_, colIndex) => `Row ${rowIndex + 1} Col ${colIndex + 1}`
    )
  );
};

export const LargeDOM = () => {
  const [tableData, setTableData] = useState<string[][]>([]);

  useEffect(() => {
    setTableData(generateTableData(1000, 10));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Large DOM Performance Test</h1>
      <div className={styles.tableContainer}>
        {tableData.length === 0 ? (
          <div className={styles.loader}>Loading table...</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                {Array.from({ length: 10 }).map((_, colIndex) => (
                  <th key={colIndex}>Column {colIndex + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
