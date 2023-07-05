import { useEffect, useState } from "react";
import { URL_ENDPOINT } from "../../../constants/API";
import { createButton, createCutoff, createHijack, createLojack, createUTG, createUTGp1, createUTGp2 } from "../../preset/Preset";
import Table from "./Table";
import axios from 'axios';

export default function Position(props) {
    const [username, position, table, setTable_ufg] = props.data;
    const [ hands ] = props.hands;
    const [action, setAction] = useState(hands === "" ? "Draw cards" : table[hands]);

    console.log(username);

    function updateAction() {
        setAction(hands === "" ? "Draw cards" : table[hands]);
    }

    function getStandard(pos) {
        switch (pos) {
            case 'ufg':
                setTable_ufg(createUTG());
                break;
            case 'ufgp1':
                setTable_ufg(createUTGp1());
                break;
            case 'ufgp2':
                setTable_ufg(createUTGp2());
                break;
            case 'lj':
                setTable_ufg(createLojack());
                break;
            case 'hj':
                setTable_ufg(createHijack());
                break;
            case 'co':
                setTable_ufg(createCutoff());
                break;
            case 'but':
                setTable_ufg(createButton());
                break;
            default:
                break;
        }
    }

    function createPost() {
        axios.post(URL_ENDPOINT+'/preflop', {   
            player_type : username,
            position : position,
            preflop_table : JSON.stringify(table),
        }
        ).then((res=> {
            console.log(res);
        })
        ).catch(function (error) {
            console.log(error);
        });
    }

    function getTitle() {
        let title;
        switch (position) {
            case 'ufg':
                title = 'Under The Gun';
                break;
            case 'ufgp1':
                title = 'Under The Gun +1';
                break;
            case 'ufgp2':
                title = 'Under The Gun +2';
                break;
            case 'lj':
                title = 'Lojack';
                break;
            case 'hj':
                title = 'Hijack';
                break;
            case 'co':
                title = 'Cutoff';
                break;
            case 'but':
                title = 'Button';
                break;
            default:
                break;
        }
        return title;
    }

    useEffect(()=>{
        updateAction();
    });
    
    return (
        <div>
            <div>
                <h2> {getTitle()} </h2>
                <p>Action: {action}</p>
                <Table table={[position, table]} updateAction={updateAction}/>
                <button onClick={()=> createPost()}>Save</button>
                <button onClick={()=> getStandard(position)}>Reset</button>
            </div>
            
        </div>
    );
}