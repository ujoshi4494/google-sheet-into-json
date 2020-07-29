import React from "react";

function Table({ data }) {
  if (!data.length) return <h1>Loading</h1>;
  const tableHeadings = Object.keys(data[0]);

  return (
    <div className='container center '>
      <h1 style={{ textAlign: "center" }}>Table</h1>
      <table className='center border-black table'>
        <thead>
          <tr>
            {tableHeadings.map((heading) => (
              <th className='th' key={data[0][heading]}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {tableHeadings.map((heading) => (
                <td className='td'>{row[heading]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
