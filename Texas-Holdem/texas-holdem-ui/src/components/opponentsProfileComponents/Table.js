import "./OpponentsProfile.css";
import { useState } from "react";
import { VALUE, keys } from "../../preset/Preset";

export default function Table(props) {
    const [playerName, playerType, position] = props.player;
    const fetchData = props.data;
    const keyTable = keys();
    const table = getTableData(fetchData);

    function getTableData(data) {
        let table = null;
        for (let i = 0; i < data.length; i++) {
            if(data[i].player_type === playerType && data[i].position === position) {
                table = data[i].preflop_table;
            }
        }
        if(table === null) {
            return "";
        }
        return JSON.parse(table);
    }
    return(
        <div className="table-container">
            <div className="title-text">
                Hands player would play
            </div>
            <div>
                <table className="opponents-table" >
                    <tbody>
                        {keyTable.map((row, i)=> 
                            <tr key={i}>
                                {row.map((key, j) => {
                                    return <td key={position+'-'+key} className={table[key] === VALUE.RAISE ? "selected" : ""}>
                                            {key} 
                                        </td>;
                                })}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}