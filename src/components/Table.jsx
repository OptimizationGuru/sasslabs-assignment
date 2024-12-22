import React from 'react';

const Table = ({ data, s_no }) => {
  return (
    <table
      className="product-table"
      aria-describedby="project-table-description"
    >
      <caption id="project-table-description" className="sr-only">
        A table listing project data including percentage funded and amount
        pledged.
      </caption>
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Percentage Funded</th>
          <th scope="col">Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            {
              'amt.pledged': amountPledged,
              'percentage.funded': percentageFunded,
              currency,
            },
            index
          ) => (
            <tr key={index}>
              <td>{s_no + index + 1}</td>
              <td>{percentageFunded} %</td>
              <td>{amountPledged + ' ' + currency.toUpperCase()}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
