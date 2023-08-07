// import React, { useState, useEffect } from 'react';
// import './Matrix.css';
// import axios from 'axios';

// const labels = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

// const MatrixTable = () => {
//     const [selected, setSelected] = useState(
//         Array(13).fill().map(() => Array(13).fill(false))
//     );
//     const [isDragging, setIsDragging] = useState(false);
//     const [draggingState, setDraggingState] = useState(false);
//     const [player_type, setPlayerType] = useState();
//     const [position, setPosition] = React.useState('dealer');

//     const handleChange = (event) => {
//         setPosition(event.target.value);
//     };

//     const handleMouseDown = (i, j) => {
//         setIsDragging(true);
//         setDraggingState(!selected[i][j]);
//         setSelected(prev => prev.map((row, x) => row.map((cell, y) => x === i && y === j ? !cell : cell)));
//     };

//     const handleMouseOver = (i, j) => {
//         if (isDragging) {
//             setSelected(prev => prev.map((row, x) => row.map((cell, y) => x === i && y === j ? draggingState : cell)));
//         }
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     const handleClearGrid = () => {
//         setSelected(Array(13).fill().map(() => Array(13).fill(false))); // Reset the grid to initial state
//     };
//     const strategy = {};
//     const handleSubmitGrid = () => {
       
//         const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

//         selected.forEach((row, i) => {
//             row.forEach((isSelected, j) => {
//                 let key;

//                 if(i === j) {
//                     key = labels[i] + labels[j] + "o";
//                 } else if(labelsStrength.indexOf(labels[i]) < labelsStrength.indexOf(labels[j])) { // Check for stronger card
//                     key = labels[j] + labels[i] + "o";
//                 } else {
//                     key = labels[i] + labels[j] + "s";
//                 }

//                 strategy[key] = isSelected ? "RAISE" : "FOLD";
//             });
//         });

//     console.log(position)
//     console.log(player_type)
//     console.log(strategy)


//     const requestData = {
//             "player_type" : player_type,
//             "position" : position,
//             "preflop_table" : JSON.stringify(strategy)
//     }

//     console.log(requestData)
//     axios.post('https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop',
//      requestData,
//      {
//         headers: {
//             'content-type': 'text/json',
//         }
//      })  
// .then(res => {
//         console.log(res)
//         if(res.status===200){
//             alert("Data inserted for "+position)
//         }
//     })
//     .catch(err => console.error(err));
    

// };


//     return (
//         <div>
//             <h5>{position}</h5>
//           <input name='player_type' type='text' placeholder='player'
//           onChange={e => setPlayerType(e.target.value)}/>
//             <select value={position}   onChange={e => setPosition(e.target.value)}>
//             <option value="dealer">Dealer</option>
//             <option value="small-blind">Small Blind</option>
//             <option value="big-blind">Big Blind</option>
//             <option value="UTG">Under The Gun</option>
//             <option value="low-jack">Low Jack</option>
//             <option value="high-jack">High Jack</option>
//             <option value="cut-off">Cut Off</option>
//             </select>
//             <table className="matrix" onMouseUp={handleMouseUp}>
//                 <tbody>
//                     <tr>
//                         <td></td>
//                         {labels.map((label, i) => (
//                             <td key={i}>{label}</td>
//                         ))}
//                     </tr>
//                     {selected.map((row, i) => (
//                         <tr key={i}>
//                             <td>{labels[i]}</td>
//                             {row.map((isSelected, j) => (
//                                 <td 
//                                     key={j} 
//                                     className={isSelected ? 'selected' : ''} 
//                                     onMouseDown={() => handleMouseDown(i, j)} 
//                                     onMouseOver={() => handleMouseOver(i, j)}
//                                 >
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={handleClearGrid}>Clear Grid</button>
//             <button onClick={handleSubmitGrid}>Submit Grid</button>
//         </div>
//     );
// };

// export default MatrixTable;




// import React, { useState, useEffect } from "react";
// import "./Matrix.css";
// import axios from "axios";

// const labels = [
//   "A",
//   "K",
//   "Q",
//   "J",
//   "T",
//   "9",
//   "8",
//   "7",
//   "6",
//   "5",
//   "4",
//   "3",
//   "2",
// ];

// const MatrixTable = (props) => {
//   const [selected, setSelected] = useState(
//     Array(13)
//       .fill()
//       .map(() => Array(13).fill(false))
//   );
//   const [isDragging, setIsDragging] = useState(false);
//   const [draggingState, setDraggingState] = useState(false);
//   const [player_type, setPlayerType] = useState();
//   const [position, setPosition] = React.useState("dealer");

//   const handleChange = (event) => {
//     setPosition(event.target.value);
//   };

//   const handleMouseDown = (i, j) => {
//     setIsDragging(true);
//     setDraggingState(!selected[i][j]);
//     setSelected((prev) =>
//       prev.map((row, x) =>
//         row.map((cell, y) => (x === i && y === j ? !cell : cell))
//       )
//     );
//   };

//   const handleMouseOver = (i, j) => {
//     if (isDragging) {
//       setSelected((prev) =>
//         prev.map((row, x) =>
//           row.map((cell, y) => (x === i && y === j ? draggingState : cell))
//         )
//       );
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleClearGrid = () => {
//     setSelected(
//       Array(13)
//         .fill()
//         .map(() => Array(13).fill(false))
//     ); // Reset the grid to initial state
//   };
//   const strategy = {};
//   const handleSubmitGrid = () => {
//     const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

//     selected.forEach((row, i) => {
//       row.forEach((isSelected, j) => {
//         let key;

//         if (i === j) {
//           key = labels[i] + labels[j] + "o";
//         } else if (
//           labelsStrength.indexOf(labels[i]) < labelsStrength.indexOf(labels[j])
//         ) {
//           // Check for stronger card
//           key = labels[j] + labels[i] + "o";
//         } else {
//           key = labels[i] + labels[j] + "s";
//         }

//         strategy[key] = isSelected ? "RAISE" : "FOLD";
//       });
//     });

//     console.log(position);
//     console.log(player_type);
//     console.log(strategy);

//     const requestData = {
//       player_type: player_type,
//       position: position,
      
//       preflop_table: JSON.stringify(strategy),
//     };

//     console.log(requestData);
//     axios
//       .post(
//         "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop",
//         requestData,
//         {
//           headers: {
//             "content-type": "text/json",
//           },
//         }
//       ) // Sending data to backend
//       //axios.post('http://127.0.0.1:5000/dev/api/v2/preflop_post', requestData)
//       .then((res) => {
//         console.log(res);
//         if (res.status === 200) {
//           alert("Data inserted for " + position);
//         }
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       {/* <h5>{position}</h5> */}
//       <input
//         name="player_type"
//         type="text"
//         placeholder="player"
//         onChange={(e) => setPlayerType(e.target.value)}
//       />
//       <select value={position} onChange={(e) => setPosition(e.target.value)}>
//         <option value="dealer">Dealer</option>
//         <option value="small-blind">Small Blind</option>
//         <option value="big-blind">Big Blind</option>
//         <option value="UTG">Under The Gun</option>
//         <option value="low-jack">Low Jack</option>
//         <option value="high-jack">High Jack</option>
//         <option value="cut-off">Cut Off</option>
//       </select>
//       <table className="matrix" onMouseUp={handleMouseUp}>
//         <tbody>
//           <tr>
//             <td></td>
//             {labels.map((label, i) => (
//               <td key={i}>{label}</td>
//             ))}
//           </tr>
//           {selected.map((row, i) => (
//             <tr key={i}>
//               <td>{labels[i]}</td>
//               {row.map((isSelected, j) => (
//                 <td
//                   key={j}
//                   className={isSelected ? "selected" : ""}
//                   onMouseDown={() => handleMouseDown(i, j)}
//                   onMouseOver={() => handleMouseOver(i, j)}></td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleClearGrid}>Clear Grid</button>
//       <button onClick={handleSubmitGrid}>Submit Grid</button>
//     </div>
//   );
// };

// export default MatrixTable;





// import React, { useState } from "react";
// import "./Matrix.css";
// import axios from "axios";

// const labels = [
//   "A",
//   "K",
//   "Q",
//   "J",
//   "T",
//   "9",
//   "8",
//   "7",
//   "6",
//   "5",
//   "4",
//   "3",
//   "2",
// ];

// const MatrixTable = (props) => {
//   const [selected, setSelected] = useState(
//     Array(13)
//       .fill()
//       .map(() => Array(13).fill("FOLD"))
//   );
//   const [isDragging, setIsDragging] = useState(false);
//   const [draggingOption, setDraggingOption] = useState("FOLD");
//   const [player_type, setPlayerType] = useState();
//   const [position, setPosition] = useState("dealer");

//   const handleChange = (event) => {
//     setPosition(event.target.value);
//   };

//   const handleMouseDown = (i, j, option) => {
//     setIsDragging(true);
//     setDraggingOption(option);
//     setSelected((prev) =>
//       prev.map((row, x) =>
//         row.map((cell, y) => (x === i && y === j ? option : cell))
//       )
//     );
//   };

//   const handleMouseOver = (i, j) => {
//     if (isDragging) {
//       setSelected((prev) =>
//         prev.map((row, x) =>
//           row.map((cell, y) => (x === i && y === j ? draggingOption : cell))
//         )
//       );
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleClearGrid = () => {
//     setSelected(
//       Array(13)
//         .fill()
//         .map(() => Array(13).fill("FOLD"))
//     ); // Reset the grid to initial state
//   };

//   const handleSubmitGrid = () => {
//     const strategy = {};
//     const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

//     selected.forEach((row, i) => {
//       row.forEach((cell, j) => {
//         let key;

//         if (i === j) {
//           key = labels[i] + labels[j] + "o";
//         } else if (
//           labelsStrength.indexOf(labels[i]) < labelsStrength.indexOf(labels[j])
//         ) {
//           // Check for stronger card
//           key = labels[j] + labels[i] + "o";
//         } else {
//           key = labels[i] + labels[j] + "s";
//         }

//         strategy[key] = cell;
//       });
//     });

//     const requestData = {
//       player_type: player_type,
//       position: position,
//       preflop_table: JSON.stringify(strategy),
//     };

//     axios
//       .post(
//         "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop",
//         requestData,
//         {
//           headers: {
//             "content-type": "text/json",
//           },
//         }
//       )
//       .then((res) => {
//         if (res.status === 200) {
//           alert("Data inserted for " + position);
//         }
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       <input
//         name="player_type"
//         type="text"
//         placeholder="player"
//         onChange={(e) => setPlayerType(e.target.value)}
//       />
//       <select value={position} onChange={handleChange}>
//         <option value="dealer">Dealer</option>
//         <option value="small-blind">Small Blind</option>
//         <option value="big-blind">Big Blind</option>
//         <option value="UTG">Under The Gun</option>
//         <option value="low-jack">Low Jack</option>
//         <option value="high-jack">High Jack</option>
//         <option value="cut-off">Cut Off</option>
//       </select>
//       <table className="matrix" onMouseUp={handleMouseUp}>
//         <tbody>
//           <tr>
//             <td></td>
//             {labels.map((label, i) => (
//               <td key={i}>{label}</td>
//             ))}
//           </tr>
//           {selected.map((row, i) => (
//             <tr key={i}>
//               <td>{labels[i]}</td>
//               {row.map((cell, j) => (
//                 <td key={j}>
//                   <button
//                     className={
//                       cell === "RAISE"
//                         ? "selected-raise"
//                         : cell === "CALL"
//                         ? "selected-call"
//                         : ""
//                     }
//                     onClick={() => handleMouseDown(i, j, "RAISE")}
//                     onMouseDown={() => handleMouseDown(i, j, "RAISE")}
//                     onMouseOver={() => handleMouseOver(i, j)}>
//                     RAISE
//                   </button>
//                   <button
//                     className={cell === "CALL" ? "selected-call" : ""}
//                     onClick={() => handleMouseDown(i, j, "CALL")}
//                     onMouseDown={() => handleMouseDown(i, j, "CALL")}
//                     onMouseOver={() => handleMouseOver(i, j)}>
//                     CALL
//                   </button>
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleClearGrid}>Clear Grid</button>
//       <button onClick={handleSubmitGrid}>Submit Grid</button>
//     </div>
//   );
// };

// export default MatrixTable;



// import React, { useState } from "react";
// import "./Matrix.css";
// import axios from "axios";

// const labels = [
//   "A",
//   "K",
//   "Q",
//   "J",
//   "T",
//   "9",
//   "8",
//   "7",
//   "6",
//   "5",
//   "4",
//   "3",
//   "2",
// ];

// const MatrixTable = (props) => {
//   const [selected, setSelected] = useState(
//     Array(13)
//       .fill()
//       .map(() => Array(13).fill("FOLD"))
//   );
//   const [isDragging, setIsDragging] = useState(false);
//   const [draggingOption, setDraggingOption] = useState("FOLD");
//   const [player_type, setPlayerType] = useState();
//   const [position, setPosition] = useState("dealer");

//   const handleChange = (event) => {
//     setPosition(event.target.value);
//   };

//   const handleMouseDown = (option) => {
//     setIsDragging(true);
//     setDraggingOption(option);
//   };

//   const handleMouseOver = (i, j) => {
//     if (isDragging) {
//       setSelected((prev) =>
//         prev.map((row, x) =>
//           row.map((cell, y) => (x === i && y === j ? draggingOption : cell))
//         )
//       );
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleClearGrid = () => {
//     setSelected(
//       Array(13)
//         .fill()
//         .map(() => Array(13).fill("FOLD"))
//     ); // Reset the grid to initial state
//   };

//   const handleSubmitGrid = () => {
//     const strategy = {};
//         const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

//         selected.forEach((row, i) => {
//           row.forEach((cell, j) => {
//             let key;

//             if (i === j) {
//               key = labels[i] + labels[j] + "o";
//             } else if (
//               labelsStrength.indexOf(labels[i]) < labelsStrength.indexOf(labels[j])
//             ) {
//               // Check for stronger card
//               key = labels[j] + labels[i] + "o";
//             } else {
//               key = labels[i] + labels[j] + "s";
//             }

//             strategy[key] = cell;
//           });
//         });

//         const requestData = {
//           player_type: player_type,
//           position: position,
//           preflop_table: JSON.stringify(strategy),
//         };

//         axios
//           .post(
//             "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop",
//             requestData,
//             {
//               headers: {
//                 "content-type": "text/json",
//               },
//             }
//           )
//           .then((res) => {
//             if (res.status === 200) {
//               alert("Data inserted for " + position);
//             }
//           })
//           .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       <input
//         name="player_type"
//         type="text"
//         placeholder="player"
//         onChange={(e) => setPlayerType(e.target.value)}
//       />
//       <select value={position} onChange={handleChange}>
//         <option value="dealer">Dealer</option>
//         <option value="small-blind">Small Blind</option>
//         <option value="big-blind">Big Blind</option>
//         <option value="UTG">Under The Gun</option>
//         <option value="low-jack">Low Jack</option>
//         <option value="high-jack">High Jack</option>
//         <option value="cut-off">Cut Off</option>
//       </select>
//       <div className="action-buttons">
//         <button onClick={() => handleMouseDown("FOLD")}>FOLD</button>
//         <button onClick={() => handleMouseDown("RAISE")}>RAISE</button>
//         <button onClick={() => handleMouseDown("CALL")}>CALL</button>
//       </div>
//       <table className="matrix" onMouseUp={handleMouseUp}>
//         <tbody>
//           <tr>
//             <td></td>
//             {labels.map((label, i) => (
//               <td key={i}>{label}</td>
//             ))}
//           </tr>
//           {selected.map((row, i) => (
//             <tr key={i}>
//               <td>{labels[i]}</td>
//               {row.map((cell, j) => (
//                 <td
//                   key={j}
//                   className={
//                     cell === "RAISE"
//                       ? "selected-raise"
//                       : cell === "CALL"
//                       ? "selected-call"
//                       : ""
//                   }
//                   onMouseDown={() => handleMouseDown(selected[i][j])}
//                   onMouseOver={() => handleMouseOver(i, j)}></td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleClearGrid}>Clear Grid</button>
//       <button onClick={handleSubmitGrid}>Submit Grid</button>
//     </div>
//   );
// };

// export default MatrixTable;




// import React, { useState, useRef } from "react";
// import "./Matrix.css";
// import axios from "axios";

// const labels = [
//   "A",
//   "K",
//   "Q",
//   "J",
//   "T",
//   "9",
//   "8",
//   "7",
//   "6",
//   "5",
//   "4",
//   "3",
//   "2",
// ];

// const MatrixTable = (props) => {
//   const [selected, setSelected] = useState(
//     Array(13)
//       .fill()
//       .map(() => Array(13).fill("FOLD"))
//   );
//   const [isDragging, setIsDragging] = useState(false);
//   const [draggingOption, setDraggingOption] = useState("FOLD");
//   const [player_type, setPlayerType] = useState();
//   const [position, setPosition] = useState("dealer");
//   const isMouseDownRef = useRef(false);

//   const handleChange = (event) => {
//     setPosition(event.target.value);
//   };

//   const handleCellClick = (i, j) => {
//     isMouseDownRef.current = true;
//     setDraggingOption(selected[i][j] === "FOLD" ? "RAISE" : "FOLD");
//     setSelected((prev) =>
//       prev.map((row, x) =>
//         row.map((cell, y) => (x === i && y === j ? draggingOption : cell))
//       )
//     );
//   };

//   const handleCellHover = (i, j) => {
//     if (isMouseDownRef.current && isDragging) {
//       setSelected((prev) =>
//         prev.map((row, x) =>
//           row.map((cell, y) => (x === i && y === j ? draggingOption : cell))
//         )
//       );
//     }
//   };

//   const handleMouseUp = () => {
//     isMouseDownRef.current = false;
//     setIsDragging(false);
//   };

//   const handleClearGrid = () => {
//     setSelected(
//       Array(13)
//         .fill()
//         .map(() => Array(13).fill("FOLD"))
//     ); // Reset the grid to initial state
//   };

//   const handleSubmitGrid = () => {
//     const strategy = {};
//         const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

//         selected.forEach((row, i) => {
//           row.forEach((cell, j) => {
//             let key;

//             if (i === j) {
//               key = labels[i] + labels[j] + "o";
//             } else if (
//               labelsStrength.indexOf(labels[i]) < labelsStrength.indexOf(labels[j])
//             ) {
//               // Check for stronger card
//               key = labels[j] + labels[i] + "o";
//             } else {
//               key = labels[i] + labels[j] + "s";
//             }

//             strategy[key] = cell;
//           });
//         });

//         const requestData = {
//           player_type: player_type,
//           position: position,
//           preflop_table: JSON.stringify(strategy),
//         };

//         axios
//           .post(
//             "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop",
//             requestData,
//             {
//               headers: {
//                 "content-type": "text/json",
//               },
//             }
//           )
//           .then((res) => {
//             if (res.status === 200) {
//               alert("Data inserted for " + position);
//             }
//           })
//           .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       <input
//         name="player_type"
//         type="text"
//         placeholder="player"
//         onChange={(e) => setPlayerType(e.target.value)}
//       />
//       <select value={position} onChange={handleChange}>
//         <option value="dealer">Dealer</option>
//         <option value="small-blind">Small Blind</option>
//         <option value="big-blind">Big Blind</option>
//         <option value="UTG">Under The Gun</option>
//         <option value="low-jack">Low Jack</option>
//         <option value="high-jack">High Jack</option>
//         <option value="cut-off">Cut Off</option>
//       </select>
//       <div className="action-buttons">
//         <button onClick={() => setDraggingOption("FOLD")}>FOLD</button>
//         <button onClick={() => setDraggingOption("RAISE")}>RAISE</button>
//         <button onClick={() => setDraggingOption("CALL")}>CALL</button>
//       </div>
//       <table
//         className="matrix"
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}>
//         <tbody>
//           <tr>
//             <td></td>
//             {labels.map((label, i) => (
//               <td key={i}>{label}</td>
//             ))}
//           </tr>
//           {selected.map((row, i) => (
//             <tr key={i}>
//               <td>{labels[i]}</td>
//               {row.map((cell, j) => (
//                 <td
//                   key={j}
//                   className={
//                     cell === "RAISE"
//                       ? "selected-raise"
//                       : cell === "CALL"
//                       ? "selected-call"
//                       : ""
//                   }
//                   onClick={() => handleCellClick(i, j)}
//                   onMouseDown={() => setIsDragging(true)}
//                   onMouseOver={() => handleCellHover(i, j)}></td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleClearGrid}>Clear Grid</button>
//       <button onClick={handleSubmitGrid}>Submit Grid</button>
//     </div>
//   );
// };

// export default MatrixTable;





import React, { useState, useRef } from "react";
import "./Matrix.css";
import axios from "axios";

const labels = [
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

const MatrixTable = (props) => {
  const [selected, setSelected] = useState(
    Array(13)
      .fill()
      .map(() => Array(13).fill("FOLD"))
  );
  const [isDragging, setIsDragging] = useState(false);
  const [selectedOption, setSelectedOption] = useState("FOLD");
  const [player_type, setPlayerType] = useState();
  const [position, setPosition] = useState("but");
  const isMouseDownRef = useRef(false);

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  const handleCellClick = (i, j) => {
    isMouseDownRef.current = true;
    setSelected((prev) =>
      prev.map((row, x) => row.map((cell, y) => (x === i && y === j ? selectedOption : cell)))
    );
  };

  const handleCellHover = (i, j) => {
    if (isMouseDownRef.current && isDragging) {
      setSelected((prev) =>
        prev.map((row, x) =>
          row.map((cell, y) => (x === i && y === j ? selectedOption : cell))
        )
      );
    }
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleClearGrid = () => {
    setSelected(
      Array(13)
        .fill()
        .map(() => Array(13).fill("FOLD"))
    ); // Reset the grid to initial state
  };

  const handleSubmitGrid = () => {
    const strategy = {};
        const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

        selected.forEach((row, i) => {
          row.forEach((cell, j) => {
            let key;

            if (i === j) {
              key = labels[i] + labels[j] + "o";
            } else if (
              labelsStrength.indexOf(labels[i]) < labelsStrength.indexOf(labels[j])
            ) {
              // Check for stronger card
              key = labels[j] + labels[i] + "o";
            } else {
              key = labels[i] + labels[j] + "s";
            }

            strategy[key] = cell;
          });
        });

        const requestData = {
          player_type: player_type,
          position: position,
          preflop_table: JSON.stringify(strategy),
        };

        axios
          .post(
            "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop",
            requestData,
            {
              headers: {
                "content-type": "text/json",
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              alert("Data inserted for " + position);
            }
          })
          .catch((err) => console.error(err));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <input
        name="player_type"
        type="text"
        placeholder="player"
        onChange={(e) => setPlayerType(e.target.value)}
      />
      <select value={position} onChange={handleChange}>
        <option value="but">Dealer</option>
        <option value="sb">Small Blind</option>
        <option value="bb">Big Blind</option>
        <option value="utg">Under The Gun</option>
        <option value="lj">Low Jack</option>
        <option value="hj">High Jack</option>
        <option value="co">Cut Off</option>
      </select>
      <div className="action-buttons">
        <button
          className={selectedOption === "FOLD" ? "selected" : ""}
          onClick={() => handleOptionChange("FOLD")}
        >
          FOLD
        </button>
        <button
          className={selectedOption === "RAISE" ? "selected" : ""}
          onClick={() => handleOptionChange("RAISE")}
        >
          RAISE
        </button>
        <button
          className={selectedOption === "CALL" ? "selected" : ""}
          onClick={() => handleOptionChange("CALL")}
        >
          CALL
        </button>
      </div>
      <table
        className="matrix"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <tbody>
          <tr>
            <td></td>
            {labels.map((label, i) => (
              <td key={i}>{label}</td>
            ))}
          </tr>
          {selected.map((row, i) => (
            <tr key={i}>
              <td>{labels[i]}</td>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={
                    cell === "RAISE"
                      ? "selected-raise"
                      : cell === "CALL"
                      ? "selected-call"
                      : ""
                  }
                  onClick={() => handleCellClick(i, j)}
                  onMouseDown={() => {
                    setIsDragging(true);
                    handleCellClick(i, j);
                  }}
                  onMouseOver={() => handleCellHover(i, j)}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClearGrid}>Clear Grid</button>
      <button onClick={handleSubmitGrid}>Submit Grid</button>
    </div>
  );
};

export default MatrixTable;
