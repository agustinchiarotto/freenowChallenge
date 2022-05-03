import { ReactChild } from 'react';

const Table = ({ headers, children }: { headers: string[]; children: ReactChild }) => {
  return (
    <>
      <table className="w-[100%] border-collapse" data-testid="tableContainer">
        <thead>
          <tr>
            {headers.map((headTitle: React.Key | string | undefined) => {
              return (
                <th className=" py-4 border-b text-left font-bold" key={headTitle}>
                  {headTitle}
                </th>
              );
            })}
          </tr>
        </thead>
        {children}
      </table>
    </>
  );
};

export default Table;
