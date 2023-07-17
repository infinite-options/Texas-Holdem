import { useState } from "react";
import { VALUE, keys } from "../../preset/Preset";

import "./Table.css";

export default function Table(props) {
    const position = props.table[0];
    const table = props.table[1];
    const updateAction = props.updateAction;
    const keyTable = keys();
    const [isDragging, setIsDragging] = useState(false);
    const [draggingState, setDraggingState] = useState(false);
    const [, updateState] = useState();

    const handleMouseDown = (i, j) => {
        setIsDragging(true);
        table[keyTable[i][j]] = table[keyTable[i][j]] === VALUE.RAISE ? VALUE.FOLD : VALUE.RAISE;
        setDraggingState(table[keyTable[i][j]] === VALUE.RAISE);    
        updateAction();    
        updateState([]);
    };

    const handleMouseOver = (i, j) => {
        if (isDragging) {
            table[keyTable[i][j]] = draggingState ? VALUE.RAISE : VALUE.FOLD;
            updateAction(); 
            updateState([]);
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
                                return <td key={position+'-'+key} 
                                            className={table[key] === VALUE.RAISE ? "selected" : ""}
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