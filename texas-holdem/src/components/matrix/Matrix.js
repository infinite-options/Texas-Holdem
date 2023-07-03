import React, { useState, useEffect } from "react";
import "./Matrix.css";
//import axios from "axios";

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

const Matrix = () => {
  const [selected, setSelected] = useState(
    Array(13)
      .fill()
      .map(() => Array(13).fill(false))
  );
  const [isDragging, setIsDragging] = useState(false);
  const [draggingState, setDraggingState] = useState(false);

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

  useEffect(() => {
    const strategy = {};
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
    /*
    console.log(
      Object.entries(strategy)
        .map(([key, value]) => `"${key}" : "${value}"`)
        .join(",\n")
    );*/
    
    // Make an API request to save the log data
  //   axios
  //     .post("http://localhost:5000/api/logs", logData)
  //     .then((response) => {
  //       console.log("Log data saved successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error saving log data:", error);
  //     });
  }, [selected]);

  return (
    <table className="matrix" onMouseUp={handleMouseUp}>
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
            {row.map((isSelected, j) => (
              <td
                key={j}
                className={isSelected ? "selected" : ""}
                onMouseDown={() => handleMouseDown(i, j)}
                onMouseOver={() => handleMouseOver(i, j)}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matrix;
