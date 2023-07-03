import Position from "./Profile/Position";
import { createUTG, createUTGp1, createUTGp2, createLojack, createHijack, createCutoff, createButton } from "../preset/Preset";
import { useEffect, useState } from "react";
import axios from 'axios';
import { URL_ENDPOINT } from "../../constants/API";

export default function Profile(props) {
    const username = props.user;
    const [fetchData, setFetchData] = useState({});
    const [table_ufg, setTable_ufg] = useState(createUTG());
    const [table_ufgp1, setTable_ufgp1] = useState(createUTGp1());
    const [table_ufgp2, setTable_ufgp2] = useState(createUTGp2());
    const [table_lj, setTable_lj] = useState(createLojack());
    const [table_hj, setTable_hj] = useState(createHijack());
    const [table_co, setTable_co] = useState(createCutoff());
    const [table_but, setTable_but] = useState(createButton());

    function getFetchData() {
         axios.get(URL_ENDPOINT+'/preflop').then((res=> {
            setFetchData(res.data);
            if(fetchData.length > 0) {
                fetchData.map((preflop) => {
                    if(preflop.player_type === username) {
                        switch (preflop.position) {
                            case 'ufg':
                                setTable_ufg(preflop.preflop_table);
                                break;
                            case 'ufgp1':
                                setTable_ufgp1(preflop.preflop_table);
                                break;
                            case 'ufgp2':
                                setTable_ufgp2(preflop.preflop_table);
                                break;
                            case 'lj':
                                setTable_lj(preflop.preflop_table);
                                break;
                            case 'hj':
                                setTable_hj(preflop.preflop_table);
                                break;
                            case 'but':
                                setTable_co(preflop.preflop_table);
                                break;
                            case 'but':
                                setTable_but(preflop.preflop_table);
                                break;
                        }
                    }
                });
            }            
        }));
    }

    useEffect(()=> {
        getFetchData();
    }, []);

    

    return(
        <div>
            <Position data={[username, 'position', table_ufg]}/>

        </div>
    );
}