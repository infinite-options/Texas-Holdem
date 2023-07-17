import "./OpponentsProfile.css";
import { useState } from "react";
import { VALUE, keys } from "../../preset/Preset";

export default function Table(props) {
    const keyTable = keys();
    const [playerName, playerType, postion] = props.player;
    const fetchData = props.data;
    return(
        <div className="table-container">
            <div className="title-text">
                Hands player would play
            </div>
            <div>
                {/*
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
                </table> **/}
            </div>
        </div>
    );
}