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

// const SmallBlindMatrix = ({ position, hand }) => {
//   const [selected, setSelected] = useState(
//     Array(13)
//       .fill()
//       .map(() => Array(13).fill(false))
//   );
//   const [isDragging, setIsDragging] = useState(false);
//   const [decision, setIsDecision] = useState("EMPTY");
//   const [reference, setReference] = useState([]);

//   const [draggingState, setDraggingState] = useState(false);

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

//     // axios.post('http://127.0.0.1:5000/post_strategy', strategy) // Sending data to backend
//     //     .then(res => console.log(res))
//     //     .catch(err => console.error(err));

//     const input = {
//       // "table_id":"100",
//       data: strategy,
//       position: "Small Blind",
//       play_type: "type 1",
//     };

//     axios
//       .post("http://127.0.0.1:5000/insert", input) // Sending data to backend
//       .then((res) => console.log(res))
//       .catch((err) => console.error(err));
//   };

//   const getDecision = () => {
//     const input = { table_id: 1 };

//     console.log("Get decision for ", position);

//     axios
//       .get(
//         "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop"
//       ) // Sending data to backend
//       .then((res) => {
//         // console.log(res)
//         res.data.map((item) => {
//           //                console.log(item.player_type+" "+item.position)
//           // use cut-off instead of co later on
//           if (item.player_type == "Ankit" && item.position == "small-blind") {
//             //console.log("Im in "+item.preflop_table)
//             var obj = item.preflop_table;

//             var parsed_obj = JSON.parse(obj);
//             console.log(parsed_obj[combination] + "is var ");
//             setIsDecision(parsed_obj[combination]);
//             console.log(typeof obj + "is type of ojb ");
//             const propertyValues = Object.entries(obj);
//             setReference(propertyValues);
//           }
//         });
//       })
//       .catch((err) => console.error(err));
//   };

//   const getReference = () => {};

//   const card1 = hand[0].name;
//   const card2 = hand[1].name;
//   const priorityOrder = {
//     A: 13,
//     K: 12,
//     Q: 11,
//     J: 10,
//     T: 9,
//     9: 8,
//     8: 7,
//     7: 6,
//     6: 5,
//     5: 4,
//     4: 3,
//     3: 2,
//     2: 1,
//   };

//   const card1Rank = card1.charAt(0);
//   const card2Rank = card2.charAt(0);

//   let higherRankCard, lowerRankCard;

//   if (priorityOrder[card1Rank] > priorityOrder[card2Rank]) {
//     higherRankCard = card1Rank;
//     lowerRankCard = card2Rank;
//   } else if (priorityOrder[card2Rank] > priorityOrder[card1Rank]) {
//     higherRankCard = card2Rank;
//     lowerRankCard = card1Rank;
//   } else {
//     // Handle the case when both cards have the same rank
//     higherRankCard = card1Rank;
//     lowerRankCard = card2Rank;
//   }

//   const combination =
//     higherRankCard +
//     lowerRankCard +
//     (card1.charAt(1) === card2.charAt(1) ? "s" : "o");

//   console.log("combination:", combination);

//   const action = strategy[combination] || "FOLD";
//   console.log("action:", action);

//   return (
//     <div>
//       <h5>{combination}</h5>
//       <h5>{position}</h5>

//       {/* <button onClick={handleClearGrid}>Clear Grid</button>
//             <button onClick={handleSubmitGrid}>Submit Grid</button>*/}
//       <button onClick={getDecision}>Get decision</button>
//       <h5>{decision != "EMPTY" ? <div>{decision}</div> : <div></div>}</h5>
//       {/* <button onClick={getReference}>See Reference Table</button>
//       {decision != "EMPTY" ? (
//         <div>
//           <table className="matrix" onMouseUp={handleMouseUp}>
//             <tbody>
//               <tr>
//                 <td></td>
//                 {labels.map((label, i) => (
//                   <td key={i}>{label}</td>
//                 ))}
//               </tr>
//               {reference.map((row, i) => (
//                 <tr key={i}>
//                   <td>{labels[i]}</td>
//                   {row.map((isSelected, j) => (
//                     <td
//                       key={j}
//                       className={isSelected ? "selected" : ""}
//                       onMouseDown={() => handleMouseDown(i, j)}
//                       onMouseOver={() => handleMouseOver(i, j)}></td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div></div>
//       )} */}
//     </div>
//   );
// };

// export default SmallBlindMatrix;


import React, { useState, useEffect } from "react";
import "./Matrix.css";
import axios from "axios";
import { VALUE, createSmallBlind } from "../preset/Preset.js";
import "./Table.css";
import {
  createUTG,
  createUTGp1,
  createUTGp2,
  createLojack,
  createHijack,
  createCutoff,
  createButton,
  mergeTables,
  createTable,
  keys,
} from "../preset/Preset";
const keyTable = keys();

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

const SmallBlindMatrix = ({ position, hand, data }) => {
  const [selected, setSelected] = useState(
    Array(13)
      .fill()
      .map(() => Array(13).fill(false))
  );
  const [isDragging, setIsDragging] = useState(false);
  const [decision, setIsDecision] = useState("EMPTY");
  const [reference, setReference] = useState("EMPTY");
  const [table_sb, setTable_sb] = useState(createSmallBlind());
  const [draggingState, setDraggingState] = useState(false);
  useEffect(() => {
    function setTable(pos, setState, standardTable) {
      if (data.length > 0) {
        let isExist = false;
        data.map((preflop) => {
          if (
            preflop.player_type === "Ankit" &&
            preflop.position === "sb"
          ) {
            let playerTable;
            try {
              playerTable = JSON.parse(preflop.preflop_table);
              console.log(playerTable);
              setState(mergeTables(playerTable, createTable()));
              isExist = true;
            } catch (error) {
              console.log("Wrong table format. \n" + error.message);
            }
          }
        });
        if (!isExist) {
          setState(standardTable());
        }
      }
    }
    setTable("sb", setTable_sb, createSmallBlind);
  }, [data]);

  const handleMouseDown = (i, j) => {
    setIsDragging(true);
    setDraggingState(!selected[i][j]);
    setSelected((prev) =>
      prev.map((row, x) =>
        row.map((cell, y) => (x === i && y === j ? !cell : cell))
      )
    );
  };

  const handleMouseOver = (i, j) => {
    if (isDragging) {
      setSelected((prev) =>
        prev.map((row, x) =>
          row.map((cell, y) => (x === i && y === j ? draggingState : cell))
        )
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClearGrid = () => {
    setSelected(
      Array(13)
        .fill()
        .map(() => Array(13).fill(false))
    ); // Reset the grid to initial state
  };
  const strategy = {};
  const handleSubmitGrid = () => {
    const labelsStrength = labels.slice().reverse(); // Use a reversed labels array to get the strength of cards

    selected.forEach((row, i) => {
      row.forEach((isSelected, j) => {
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

        strategy[key] = isSelected ? "RAISE" : "FOLD";
      });
    });

    // axios.post('http://127.0.0.1:5000/post_strategy', strategy) // Sending data to backend
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    const input = {
      // "table_id":"100",
      data: strategy,
      position: "small-blind",
      play_type: "Ankit",
    };

    axios
      .post("http://127.0.0.1:5000/insert", input) // Sending data to backend
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const getDecision = () => {
    const input = { table_id: 1 };

    console.log("Get decision for ", position);

    axios
      .get(
        "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop"
      ) // Sending data to backend
      .then((res) => {
        // console.log(res)
        res.data.map((item) => {
          //                console.log(item.player_type+" "+item.position)
          // use cut-off instead of co later on
          if (
            item.player_type == "Ankit" &&
            item.position == "sb"
          ) {
            //console.log("Im in "+item.preflop_table)
            var obj = item.preflop_table;

            var parsed_obj = JSON.parse(obj);
            console.log(parsed_obj[combination] + "is var ");
            setIsDecision(parsed_obj[combination]);
            console.log(typeof obj + "is type of ojb ");
            const propertyValues = Object.entries(obj);
            setReference(propertyValues);
          }
        });
      })
      .catch((err) => console.error(err));
  };
  const getReference = () => {
    setReference("SHOW_TABLE");
  };
  const hideReference = () => {
    setReference("EMPTY");
  };

  const card1 = hand[0].name;
  const card2 = hand[1].name;
  const priorityOrder = {
    A: 13,
    K: 12,
    Q: 11,
    J: 10,
    T: 9,
    9: 8,
    8: 7,
    7: 6,
    6: 5,
    5: 4,
    4: 3,
    3: 2,
    2: 1,
  };

  const card1Rank = card1.charAt(0);
  const card2Rank = card2.charAt(0);

  let higherRankCard, lowerRankCard;

  if (priorityOrder[card1Rank] > priorityOrder[card2Rank]) {
    higherRankCard = card1Rank;
    lowerRankCard = card2Rank;
  } else if (priorityOrder[card2Rank] > priorityOrder[card1Rank]) {
    higherRankCard = card2Rank;
    lowerRankCard = card1Rank;
  } else {
    // Handle the case when both cards have the same rank
    higherRankCard = card1Rank;
    lowerRankCard = card2Rank;
  }

  const combination =
    higherRankCard +
    lowerRankCard +
    (card1.charAt(1) === card2.charAt(1) ? "s" : "o");

  console.log("combination:", combination);

  const action = strategy[combination] || "FOLD";
  console.log("action:", action);

  return (
    <div>
      <h5>{card1}</h5>
      <h5>{card2}</h5>
      <h5>{combination}</h5>
      <h5>{position}</h5>

      <button onClick={getDecision}>Get decision</button>
      <h5>{decision != "EMPTY" ? <div>{decision}</div> : <div></div>}</h5>
      <button onClick={getReference}>See Reference</button>
      <button onClick={hideReference}>Hide Reference</button>
      {reference != "EMPTY" ? (
        <div>
          <table className="table">
            <tbody>
              {keyTable.map((row, i) => (
                <tr key={i}>
                  {keyTable[i].map((key, j) => {
                    return (
                      <td
                        key={position + "-" + key}
                        className={
                          table_sb[key] === VALUE.RAISE ? "selected" : ""
                        }
                        onMouseDown={() => handleMouseDown(i, j)}
                        onMouseOver={() => handleMouseOver(i, j)}>
                        {" "}
                        {key}{" "}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default SmallBlindMatrix;
