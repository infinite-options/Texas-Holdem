import Position from  "./profileComponents/Position";
import { createUTG, createUTGp1, createUTGp2, createLojack, createHijack, createCutoff, createButton, mergeTables, createTable } from "../preset/Preset";
import { useEffect, useState } from "react";

export default function Profile(props) {
    const [username, fetchData] = props.data;
    const [ hands ] = props.hands;
    const [table_ufg, setTable_ufg] = useState(createUTG());
    const [table_ufgp1, setTable_ufgp1] = useState(createUTGp1());
    const [table_ufgp2, setTable_ufgp2] = useState(createUTGp2());
    const [table_lj, setTable_lj] = useState(createLojack());
    const [table_hj, setTable_hj] = useState(createHijack());
    const [table_co, setTable_co] = useState(createCutoff());
    const [table_but, setTable_but] = useState(createButton());

    useEffect(()=> {
        function setTable(pos, setState, standardTable) {
            if(fetchData.length > 0) {
                let isExist = false;
                fetchData.map((preflop) => {
                    if(preflop.player_type === username && preflop.position === pos) {
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
                if(!isExist) {
                    setState(standardTable());
                }
            }                
        }
        setTable('ufg', setTable_ufg, createUTG);
        setTable('ufgp1', setTable_ufgp1, createUTGp1);
        setTable('ufgp2', setTable_ufgp2, createUTGp2);
        setTable('lj', setTable_lj, createLojack);
        setTable('hj', setTable_hj, createHijack);
        setTable('co', setTable_co, createCutoff);
        setTable('but', setTable_but, createButton);
        
    }, [fetchData, username]);

    return(
        <div>
            <div>
                <h2>Player: {username === "" ? "Type username" : username}</h2>
            </div>
            <Position data={[username, 'ufg', table_ufg, setTable_ufg]} hands={[hands]}/>
            <Position data={[username, 'ufgp1', table_ufgp1, setTable_ufgp1]} hands={[hands]}/>
            <Position data={[username, 'ufgp2', table_ufgp2, setTable_ufgp2]} hands={[hands]}/>
            <Position data={[username, 'lj', table_lj, setTable_lj]} hands={[hands]}/>
            <Position data={[username, 'hj', table_hj, setTable_hj]} hands={[hands]}/>
            <Position data={[username, 'co', table_co, setTable_co]} hands={[hands]}/>
            <Position data={[username, 'but', table_but, setTable_but]} hands={[hands]}/>
        </div>
    );
}