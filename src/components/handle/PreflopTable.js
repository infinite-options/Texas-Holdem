// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PreflopTable = () => {
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     // Fetch the data from the endpoint
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop");
//       const data = JSON.parse(response.data.preflop_table);
//       setTableData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const renderTable = () => {
//     if (!tableData) {
//       return null;
//     }

//     // Define the ranks for rows and columns
//     const ranks = [
//       "A",
//       "K",
//       "Q",
//       "J",
//       "T",
//       "9",
//       "8",
//       "7",
//       "6",
//       "5",
//       "4",
//       "3",
//       "2",
//     ];

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             {ranks.map((rank) => (
//               <th key={rank}>{rank}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {ranks.map((rank, rowIndex) => (
//             <tr key={rank}>
//               <th>{rank}</th>
//               {ranks.map((columnRank, columnIndex) => (
//                 <td key={columnRank}>
//                   {getAction(rank, columnRank, rowIndex, columnIndex)}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   const getAction = (rowRank, columnRank, rowIndex, columnIndex) => {
//     const suits = ["s", "o"];
//     const suit = suits[rowIndex > columnIndex ? 1 : 0];
//     const cardKey = `${rowRank}${columnRank}${suit}`;
//     return tableData[cardKey] || "-";
//   };


//   return <div>{renderTable()}</div>;
// };

// export default PreflopTable;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PreflopTable = () => {
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
    
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop'
//       );
//       const data = JSON.parse(response.data.preflop_table);
//       setTableData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const renderTable = () => {
//     if (!tableData) {
//       return null;
//     }

//     // Define the ranks for rows and columns
//     const ranks = [
//       "A",
//       "K",
//       "Q",
//       "J",
//       "T",
//       "9",
//       "8",
//       "7",
//       "6",
//       "5",
//       "4",
//       "3",
//       "2",
//     ];

//     return (
//       <table className="preflop-table">
//         <thead>
//           <tr>
//             <th></th>
//             {ranks.map((rank) => (
//               <th key={rank}>{rank}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {ranks.map((rowRank, rowIndex) => (
//             <tr key={rowRank}>
//               <th>{rowRank}</th>
//               {ranks.map((columnRank, columnIndex) => (
//                 <td
//                   key={`${rowRank}-${columnRank}`}
//                   className="preflop-table-cell">
//                   {getAction(rowRank, columnRank, rowIndex, columnIndex)}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   const getAction = (rowRank, columnRank, rowIndex, columnIndex) => {
//     const suits = ["s", "o"];
//     const suit = suits[rowIndex > columnIndex ? 1 : 0];
//     const cardKey = `${rowRank}${columnRank}${suit}`;
//     return tableData[cardKey] || "-";
//   };

//   return <div>{renderTable()}</div>;
// };

// export default PreflopTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import './preflop-table.css';

const PreflopTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch the data from the endpoint
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop"
      );
      const data = JSON.parse(response.data.preflop_table);
      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderTable = () => {
    if (!tableData) {
      return null;
    }

    // Define the ranks for rows and columns
    const ranks = [
      "A",
      "K",
      "Q",
      "J",
      "T",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];

    return (
      <table className="preflop-table">
        <thead>
          <tr>
            <th></th>
            {ranks.map((rank) => (
              <th key={rank}>{rank}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ranks.map((rowRank, rowIndex) => (
            <tr key={rowRank}>
              <th>{rowRank}</th>
              {ranks.map((columnRank, columnIndex) => (
                <td
                  key={`${rowRank}-${columnRank}`}
                  className="preflop-table-cell">
                  {getAction(rowRank, columnRank, rowIndex, columnIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getAction = (rowRank, columnRank, rowIndex, columnIndex) => {
    const suits = ["s", "o"];
    const suit = rowIndex > columnIndex ? suits[1] : suits[0];
    const cardKey = `${rowRank}${columnRank}${suit}`;
    return tableData[cardKey] || "-";
  };

  return <div>{renderTable()}</div>;
};

export default PreflopTable;

