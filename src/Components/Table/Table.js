import { useState } from "react";
import { ranks } from "../../Engine/Card";
import "./Table.css";

const createKeyTable = () =>{
    function appendKey(keyTable, ranks, c, r, rank) {
        keyTable[c][r] += rank;
        if(c !== r && keyTable[c][r].length === 2) {
            let suit = c > r ? 'o' : 's';
            keyTable[c][r] += suit;
        }
    }
    const keyTable = Array.from({length: ranks.length}, e => Array.from({length: ranks.length}, e => ""));
    
    for(let i = 0; i < keyTable.length; i++) {
        for(let j = 0; j < keyTable[i].length; j++) {
            appendKey(keyTable, ranks, i, j, ranks[i]);
            appendKey(keyTable, ranks, j, i, ranks[i]);
        }
    }
    return keyTable;
};
export default function Table(props) {
    const table_title = props.table[0];
    const table = props.table[1];
    const keyTable = createKeyTable();
    const [isDragging, setIsDragging] = useState(false);
    const [draggingState, setDraggingState] = useState(false);

    const handleMouseDown = (i, j) => {
        setIsDragging(true);
        setDraggingState(!table.get(keyTable[i][j]));
        table.set(keyTable[i][j], draggingState);
    };

    const handleMouseOver = (i, j) => {
        if (isDragging) {
            table.set(keyTable[i][j], draggingState);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
      };

    return(
        <div>
            <table className="table" onMouseUp={handleMouseUp}>
                <tbody>
                    {keyTable.map((row, i)=> 
                        <tr key={i}>
                            {keyTable[i].map((key, j) => {
                                return <td key={table_title+'-'+key} 
                                            className={table.get(key) ? "selected" : ""}
                                            onMouseDown={() => handleMouseDown(i, j)}
                                            onMouseOver={() => handleMouseOver(i, j)}> {key} </td>;
                            })}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};