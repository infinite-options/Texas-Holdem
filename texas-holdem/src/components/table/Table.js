import React, { useState, useRef } from "react";

const handChart = {
  AAo: "RAISE",
  AKs: "RAISE",
  AQs: "RAISE",
  AJs: "RAISE",
  ATs: "RAISE",
  A9s: "RAISE",
  A8s: "RAISE",
  A7s: "RAISE",
  A6s: "RAISE",
  A5s: "RAISE",
  A4s: "RAISE",
  A3s: "RAISE",
  A2s: "RAISE",
  AKo: "RAISE",
  KKo: "RAISE",
  KQs: "RAISE",
  KJs: "RAISE",
  KTs: "RAISE",
  K9s: "RAISE",
  K8s: "RAISE",
  K7s: "FOLD",
  K6s: "FOLD",
  K5s: "FOLD",
  K4s: "FOLD",
  K3s: "FOLD",
  K2s: "FOLD",
  AQo: "RAISE",
  KQo: "RAISE",
  QQo: "RAISE",
  QJs: "RAISE",
  QTs: "RAISE",
  Q9s: "RAISE",
  Q8s: "FOLD",
  Q7s: "FOLD",
  Q6s: "FOLD",
  Q5s: "FOLD",
  Q4s: "FOLD",
  Q3s: "FOLD",
  Q2s: "FOLD",
  AJo: "RAISE",
  KJo: "RAISE",
  QJo: "RAISE",
  JJo: "RAISE",
  JTs: "RAISE",
  J9s: "RAISE",
  J8s: "FOLD",
  J7s: "FOLD",
  J6s: "FOLD",
  J5s: "FOLD",
  J4s: "FOLD",
  J3s: "FOLD",
  J2s: "FOLD",
  ATo: "RAISE",
  KTo: "FOLD",
  QTo: "FOLD",
  JTo: "FOLD",
  TTo: "RAISE",
  T9s: "RAISE",
  T8s: "RAISE",
  T7s: "FOLD",
  T6s: "FOLD",
  T5s: "FOLD",
  T4s: "FOLD",
  T3s: "FOLD",
  T2s: "FOLD",
  A9o: "FOLD",
  K9o: "FOLD",
  Q9o: "FOLD",
  J9o: "FOLD",
  T9o: "FOLD",
  "99o": "RAISE",
  "98s": "RAISE",
  "97s": "RAISE",
  "96s": "FOLD",
  "95s": "FOLD",
  "94s": "FOLD",
  "93s": "FOLD",
  "92s": "FOLD",
  A8o: "FOLD",
  K8o: "FOLD",
  Q8o: "FOLD",
  J8o: "FOLD",
  T8o: "FOLD",
  "98o": "FOLD",
  "88o": "RAISE",
  "87s": "RAISE",
  "86s": "FOLD",
  "85s": "FOLD",
  "84s": "FOLD",
  "83s": "FOLD",
  "82s": "FOLD",
  A7o: "FOLD",
  K7o: "FOLD",
  Q7o: "FOLD",
  J7o: "FOLD",
  T7o: "FOLD",
  "97o": "FOLD",
  "87o": "FOLD",
  "77o": "RAISE",
  "76s": "RAISE",
  "75s": "FOLD",
  "74s": "FOLD",
  "73s": "FOLD",
  "72s": "FOLD",
  A6o: "FOLD",
  K6o: "FOLD",
  Q6o: "FOLD",
  J6o: "FOLD",
  T6o: "FOLD",
  "96o": "FOLD",
  "86o": "FOLD",
  "76o": "FOLD",
  "66o": "RAISE",
  "65s": "RAISE",
  "64s": "FOLD",
  "63s": "FOLD",
  "62s": "FOLD",
  A5o: "FOLD",
  K5o: "FOLD",
  Q5o: "FOLD",
  J5o: "FOLD",
  T5o: "FOLD",
  "95o": "FOLD",
  "85o": "FOLD",
  "75o": "FOLD",
  "65o": "FOLD",
  "55o": "RAISE",
  "54s": "RAISE",
  "53s": "FOLD",
  "52s": "FOLD",
  A4o: "FOLD",
  K4o: "FOLD",
  Q4o: "FOLD",
  J4o: "FOLD",
  T4o: "FOLD",
  "94o": "FOLD",
  "84o": "FOLD",
  "74o": "FOLD",
  "64o": "FOLD",
  "54o": "FOLD",
  "44o": "RAISE",
  "43s": "FOLD",
  "42s": "FOLD",
  A3o: "FOLD",
  K3o: "FOLD",
  Q3o: "FOLD",
  J3o: "FOLD",
  T3o: "FOLD",
  "93o": "FOLD",
  "83o": "FOLD",
  "73o": "FOLD",
  "63o": "FOLD",
  "53o": "FOLD",
  "43o": "FOLD",
  "33o": "RAISE",
  "32s": "FOLD",
  A2o: "FOLD",
  K2o: "FOLD",
  Q2o: "FOLD",
  J2o: "FOLD",
  T2o: "FOLD",
  "92o": "FOLD",
  "82o": "FOLD",
  "72o": "FOLD",
  "62o": "FOLD",
  "52o": "FOLD",
  "42o": "FOLD",
  "32o": "FOLD",
  "22o": "RAISE",
};

const Table = () => {
  const [selectedCells, setSelectedCells] = useState([]);
  const isDraggingRef = useRef(false);
  const startCellRef = useRef(null);
  const priorityOrder = [
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

  const handleCellClick = (row, col) => {
    const rank1 = priorityOrder[row];
    const rank2 = priorityOrder[col];
    const combination = rank1 + rank2;
    const cellKey = `${row}-${col}`;

    if (!isDraggingRef.current) {
      if (selectedCells.includes(cellKey)) {
        setSelectedCells(selectedCells.filter((cell) => cell !== cellKey));
      } else {
        setSelectedCells([...selectedCells, cellKey]);
      }
    }
    const action = handChart[combination + "o"] || "FOLD";
    const suite = rank1 === rank2 ? "o" : "s";
    console.log("Selected Cells:", combination + suite, action);
  };

  const handleCellMouseDown = (row, col) => {
    isDraggingRef.current = true;
    startCellRef.current = `${row}-${col}`;
  };

  const handleCellMouseEnter = (row, col) => {
    if (isDraggingRef.current) {
      const startRow = parseInt(startCellRef.current.split("-")[0]);
      const startCol = parseInt(startCellRef.current.split("-")[1]);
      const endRow = row;
      const endCol = col;

      const selected = [];

      for (
        let i = Math.min(startRow, endRow);
        i <= Math.max(startRow, endRow);
        i++
      ) {
        for (
          let j = Math.min(startCol, endCol);
          j <= Math.max(startCol, endCol);
          j++
        ) {
          selected.push(`${i}-${j}`);
        }
      }

      setSelectedCells(selected);
    }
  };

  const handleCellMouseUp = () => {
    isDraggingRef.current = false;
    startCellRef.current = null;
    const selectedCombinations = selectedCells.map((cell) => {
      const [row, col] = cell.split("-");
      const rank1 = priorityOrder[row];
      const rank2 = priorityOrder[col];
      const combination = rank1 + rank2;
      const action = handChart[combination + "o"] || "FOLD";
      const suite = rank1 === rank2 ? "o" : "s";
      return combination + suite + " " + action;
    });
    console.log("Selected Cells:", selectedCombinations);
  };



  const isCellSelected = (row, col) => {
    return selectedCells.includes(`${row}-${col}`);
  };

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <th></th> {/* Empty cell for the top-left corner */}
          {priorityOrder.map((rank) => (
            <th key={rank}>{rank}</th>
          ))}
        </tr>
        {priorityOrder.map((rank, row) => (
          <tr key={rank}>
            <th>{rank}</th>
            {priorityOrder.map((rank2, col) => {
              const combination = rank + rank2 + "o";
              const action = handChart[combination] || "FOLD";
              return (
                <td
                  key={rank2}
                  onClick={() => handleCellClick(row, col)}
                  onMouseDown={() => handleCellMouseDown(row, col)}
                  onMouseEnter={() => handleCellMouseEnter(row, col)}
                  onMouseUp={handleCellMouseUp}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid black",
                    backgroundColor: isCellSelected(row, col) ? "red" : "white",
                  }}>
                  {action}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

// import React, { useState, useRef } from "react";

// const handChart = {
//   AAo: "RAISE",
//   AKs: "RAISE",
//   AQs: "RAISE",
//   AJs: "RAISE",
//   ATs: "RAISE",
//   A9s: "RAISE",
//   A8s: "RAISE",
//   A7s: "RAISE",
//   A6s: "RAISE",
//   A5s: "RAISE",
//   A4s: "RAISE",
//   A3s: "RAISE",
//   A2s: "RAISE",
//   AKo: "RAISE",
//   KKo: "RAISE",
//   KQs: "RAISE",
//   KJs: "RAISE",
//   KTs: "RAISE",
//   K9s: "RAISE",
//   K8s: "RAISE",
//   K7s: "FOLD",
//   K6s: "FOLD",
//   K5s: "FOLD",
//   K4s: "FOLD",
//   K3s: "FOLD",
//   K2s: "FOLD",
//   AQo: "RAISE",
//   KQo: "RAISE",
//   QQo: "RAISE",
//   QJs: "RAISE",
//   QTs: "RAISE",
//   Q9s: "RAISE",
//   Q8s: "FOLD",
//   Q7s: "FOLD",
//   Q6s: "FOLD",
//   Q5s: "FOLD",
//   Q4s: "FOLD",
//   Q3s: "FOLD",
//   Q2s: "FOLD",
//   AJo: "RAISE",
//   KJo: "RAISE",
//   QJo: "RAISE",
//   JJo: "RAISE",
//   JTs: "RAISE",
//   J9s: "RAISE",
//   J8s: "FOLD",
//   J7s: "FOLD",
//   J6s: "FOLD",
//   J5s: "FOLD",
//   J4s: "FOLD",
//   J3s: "FOLD",
//   J2s: "FOLD",
//   ATo: "RAISE",
//   KTo: "FOLD",
//   QTo: "FOLD",
//   JTo: "FOLD",
//   TTo: "RAISE",
//   T9s: "RAISE",
//   T8s: "RAISE",
//   T7s: "FOLD",
//   T6s: "FOLD",
//   T5s: "FOLD",
//   T4s: "FOLD",
//   T3s: "FOLD",
//   T2s: "FOLD",
//   A9o: "FOLD",
//   K9o: "FOLD",
//   Q9o: "FOLD",
//   J9o: "FOLD",
//   T9o: "FOLD",
//   "99o": "RAISE",
//   "98s": "RAISE",
//   "97s": "RAISE",
//   "96s": "FOLD",
//   "95s": "FOLD",
//   "94s": "FOLD",
//   "93s": "FOLD",
//   "92s": "FOLD",
//   A8o: "FOLD",
//   K8o: "FOLD",
//   Q8o: "FOLD",
//   J8o: "FOLD",
//   T8o: "FOLD",
//   "98o": "FOLD",
//   "88o": "RAISE",
//   "87s": "RAISE",
//   "86s": "FOLD",
//   "85s": "FOLD",
//   "84s": "FOLD",
//   "83s": "FOLD",
//   "82s": "FOLD",
//   A7o: "FOLD",
//   K7o: "FOLD",
//   Q7o: "FOLD",
//   J7o: "FOLD",
//   T7o: "FOLD",
//   "97o": "FOLD",
//   "87o": "FOLD",
//   "77o": "RAISE",
//   "76s": "RAISE",
//   "75s": "FOLD",
//   "74s": "FOLD",
//   "73s": "FOLD",
//   "72s": "FOLD",
//   A6o: "FOLD",
//   K6o: "FOLD",
//   Q6o: "FOLD",
//   J6o: "FOLD",
//   T6o: "FOLD",
//   "96o": "FOLD",
//   "86o": "FOLD",
//   "76o": "FOLD",
//   "66o": "RAISE",
//   "65s": "RAISE",
//   "64s": "FOLD",
//   "63s": "FOLD",
//   "62s": "FOLD",
//   A5o: "FOLD",
//   K5o: "FOLD",
//   Q5o: "FOLD",
//   J5o: "FOLD",
//   T5o: "FOLD",
//   "95o": "FOLD",
//   "85o": "FOLD",
//   "75o": "FOLD",
//   "65o": "FOLD",
//   "55o": "RAISE",
//   "54s": "RAISE",
//   "53s": "FOLD",
//   "52s": "FOLD",
//   A4o: "FOLD",
//   K4o: "FOLD",
//   Q4o: "FOLD",
//   J4o: "FOLD",
//   T4o: "FOLD",
//   "94o": "FOLD",
//   "84o": "FOLD",
//   "74o": "FOLD",
//   "64o": "FOLD",
//   "54o": "FOLD",
//   "44o": "RAISE",
//   "43s": "FOLD",
//   "42s": "FOLD",
//   A3o: "FOLD",
//   K3o: "FOLD",
//   Q3o: "FOLD",
//   J3o: "FOLD",
//   T3o: "FOLD",
//   "93o": "FOLD",
//   "83o": "FOLD",
//   "73o": "FOLD",
//   "63o": "FOLD",
//   "53o": "FOLD",
//   "43o": "FOLD",
//   "33o": "RAISE",
//   "32s": "FOLD",
//   A2o: "FOLD",
//   K2o: "FOLD",
//   Q2o: "FOLD",
//   J2o: "FOLD",
//   T2o: "FOLD",
//   "92o": "FOLD",
//   "82o": "FOLD",
//   "72o": "FOLD",
//   "62o": "FOLD",
//   "52o": "FOLD",
//   "42o": "FOLD",
//   "32o": "FOLD",
//   "22o": "RAISE",
// };

// const Table = () => {
//   const [selectedCells, setSelectedCells] = useState([]);
//   const isDraggingRef = useRef(false);
//   const startCellRef = useRef(null);
//   const priorityOrder = [
//     "A",
//     "K",
//     "Q",
//     "J",
//     "T",
//     "9",
//     "8",
//     "7",
//     "6",
//     "5",
//     "4",
//     "3",
//     "2",
//   ];

//   const handleCellClick = (row, col) => {
//     const cellKey = `${row}-${col}`;

//     if (!isDraggingRef.current) {
//       if (selectedCells.includes(cellKey)) {
//         setSelectedCells(selectedCells.filter((cell) => cell !== cellKey));
//       } else {
//         setSelectedCells([...selectedCells, cellKey]);
//       }
//     }
//   };

//   const handleCellMouseDown = (row, col) => {
//     isDraggingRef.current = true;
//     startCellRef.current = `${row}-${col}`;
//   };

//   const handleCellMouseEnter = (row, col) => {
//     if (isDraggingRef.current) {
//       const startRow = parseInt(startCellRef.current.split("-")[0]);
//       const startCol = parseInt(startCellRef.current.split("-")[1]);
//       const endRow = row;
//       const endCol = col;

//       const selected = [];

//       for (
//         let i = Math.min(startRow, endRow);
//         i <= Math.max(startRow, endRow);
//         i++
//       ) {
//         for (
//           let j = Math.min(startCol, endCol);
//           j <= Math.max(startCol, endCol);
//           j++
//         ) {
//           selected.push(`${i}-${j}`);
//         }
//       }

//       setSelectedCells(selected);
//     }
//   };

//   const handleCellMouseUp = () => {
//     isDraggingRef.current = false;
//     startCellRef.current = null;
//   };

//   const isCellSelected = (row, col) => {
//     return selectedCells.includes(`${row}-${col}`);
//   };

//   return (
//     <table style={{ borderCollapse: "collapse" }}>
//       <tbody>
//         <tr>
//           <th></th> {/* Empty cell for the top-left corner */}
//           {priorityOrder.map((rank) => (
//             <th key={rank}>{rank}</th>
//           ))}
//         </tr>
//         {priorityOrder.map((rank, row) => (
//           <tr key={rank}>
//             <th>{rank}</th>
//             {priorityOrder.map((rank2, col) => {
//               const combination = rank + rank2 + "o";
//               const action = handChart[combination] || "FOLD";
//               return (
//                 <td
//                   key={rank2}
//                   onClick={() => handleCellClick(row, col)}
//                   onMouseDown={() => handleCellMouseDown(row, col)}
//                   onMouseEnter={() => handleCellMouseEnter(row, col)}
//                   onMouseUp={handleCellMouseUp}
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     border: "1px solid black",
//                     backgroundColor: isCellSelected(row, col) ? "red" : "white",
//                   }}>
//                   {action}
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

// import React, { useState, useRef } from "react";

// const Table = ({ handChart }) => {
//   const [selectedCells, setSelectedCells] = useState([]);
//   const isDraggingRef = useRef(false);
//   const startCellRef = useRef(null);
//   const priorityOrder = [
//     "A",
//     "K",
//     "Q",
//     "J",
//     "T",
//     "9",
//     "8",
//     "7",
//     "6",
//     "5",
//     "4",
//     "3",
//     "2",
//   ];

//   const handleCellClick = (row, col) => {
//     const cellKey = `${row}-${col}`;

//     if (!isDraggingRef.current) {
//       if (selectedCells.includes(cellKey)) {
//         setSelectedCells(selectedCells.filter((cell) => cell !== cellKey));
//       } else {
//         setSelectedCells([...selectedCells, cellKey]);
//       }
//     }
//   };

//   const handleCellMouseDown = (row, col) => {
//     isDraggingRef.current = true;
//     startCellRef.current = `${row}-${col}`;
//   };

//   const handleCellMouseEnter = (row, col) => {
//     if (isDraggingRef.current) {
//       const startRow = parseInt(startCellRef.current.split("-")[0]);
//       const startCol = parseInt(startCellRef.current.split("-")[1]);
//       const endRow = row;
//       const endCol = col;

//       const selected = [];

//       for (
//         let i = Math.min(startRow, endRow);
//         i <= Math.max(startRow, endRow);
//         i++
//       ) {
//         for (
//           let j = Math.min(startCol, endCol);
//           j <= Math.max(startCol, endCol);
//           j++
//         ) {
//           selected.push(`${i}-${j}`);
//         }
//       }

//       setSelectedCells(selected);
//     }
//   };

//   const handleCellMouseUp = () => {
//     isDraggingRef.current = false;
//     startCellRef.current = null;
//   };

//   const isCellSelected = (row, col) => {
//     return selectedCells.includes(`${row}-${col}`);
//   };

//   const getActionForCombination = (rank, rank2) => {
//     const combination = rank + rank2 + "o";
//     return handChart[combination] || "FOLD";
//   };

//   return (
//     <table style={{ borderCollapse: "collapse" }}>
//       <tbody>
//         <tr>
//           <th></th> {/* Empty cell for the top-left corner */}
//           {priorityOrder.map((rank) => (
//             <th key={rank}>{rank}</th>
//           ))}
//         </tr>
//         {priorityOrder.map((rank, row) => (
//           <tr key={rank}>
//             <th>{rank}</th>
//             {priorityOrder.map((rank2, col) => {
//               const action = getActionForCombination(rank, rank2);
//               return (
//                 <td
//                   key={rank2}
//                   onClick={() => handleCellClick(row, col)}
//                   onMouseDown={() => handleCellMouseDown(row, col)}
//                   onMouseEnter={() => handleCellMouseEnter(row, col)}
//                   onMouseUp={handleCellMouseUp}
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     border: "1px solid black",
//                     backgroundColor: isCellSelected(row, col) ? "red" : "white",
//                   }}>
//                   {action}
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

// const Table = () => {
//   const [selectedCells, setSelectedCells] = useState([]);
//   const isDraggingRef = useRef(false);
//   const startCellRef = useRef(null);
//   const priorityOrder = [
//     "A",
//     "K",
//     "Q",
//     "J",
//     "T",
//     "9",
//     "8",
//     "7",
//     "6",
//     "5",
//     "4",
//     "3",
//     "2",
//   ];

//   const handleCellClick = (row, col) => {
//     const cellKey = `${row}-${col}`;

//     if (!isDraggingRef.current) {
//       if (selectedCells.includes(cellKey)) {
//         setSelectedCells(selectedCells.filter((cell) => cell !== cellKey));
//       } else {
//         setSelectedCells([...selectedCells, cellKey]);
//       }
//     }
//   };

//   const handleCellMouseDown = (row, col) => {
//     isDraggingRef.current = true;
//     startCellRef.current = `${row}-${col}`;
//   };

//   const handleCellMouseEnter = (row, col) => {
//     if (isDraggingRef.current) {
//       const startRow = parseInt(startCellRef.current.split("-")[0]);
//       const startCol = parseInt(startCellRef.current.split("-")[1]);
//       const endRow = row;
//       const endCol = col;

//       const selected = [];

//       for (
//         let i = Math.min(startRow, endRow);
//         i <= Math.max(startRow, endRow);
//         i++
//       ) {
//         for (
//           let j = Math.min(startCol, endCol);
//           j <= Math.max(startCol, endCol);
//           j++
//         ) {
//           selected.push(`${i}-${j}`);
//         }
//       }

//       setSelectedCells(selected);
//     }
//   };

//   const handleCellMouseUp = () => {
//     isDraggingRef.current = false;
//     startCellRef.current = null;
//   };

//   const isCellSelected = (row, col) => {
//     return selectedCells.includes(`${row}-${col}`);
//   };

//   return (
//     <table style={{ borderCollapse: "collapse" }}>
//       <tbody>
//         <tr>
//           <th></th> {/* Empty cell for the top-left corner */}
//           {priorityOrder.map((rank) => (
//             <th key={rank}>{rank}</th>
//           ))}
//         </tr>
//         {priorityOrder.map((rank, row) => (
//           <tr key={rank}>
//             <th>{rank}</th>
//             {priorityOrder.map((rank2, col) => {
//               const combination = rank + rank2 + "o";
//               const action = handChart[combination] || "FOLD";
//               return (
//                 <td
//                   key={rank2}
//                   onClick={() => handleCellClick(row, col)}
//                   onMouseDown={() => handleCellMouseDown(row, col)}
//                   onMouseEnter={() => handleCellMouseEnter(row, col)}
//                   onMouseUp={handleCellMouseUp}
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     border: "1px solid black",
//                     backgroundColor: isCellSelected(row, col) ? "red" : "white",
//                   }}>
//                   {action}
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
