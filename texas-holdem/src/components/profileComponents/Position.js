import { useEffect, useState } from "react";
import { URL_ENDPOINT } from "../../constants/API";
import { POSITION, createButton, createCutoff, createHijack, createLojack, createSmallBlind, createUTG, createUTGp1, createUTGp2 } from "../preset/Preset";
import Table from "./Table";
import axios from 'axios';

export default function Position(props) {
    const [username, position, table, setTable] = props.data;
    const [ hands ] = props.hands;
    const [action, setAction] = useState(hands === "" ? "Draw cards" : table[hands]);

    function updateAction() {
        setAction(hands === "" ? "Draw cards" : table[hands]);
    }

    function getStandard(pos) {
        switch (pos) {
            case POSITION.UTG:
                setTable(createUTG());
                break;
            case POSITION.UTGp1:
                setTable(createUTGp1());
                break;
            case POSITION.UTGp2:
                setTable(createUTGp2());
                break;
            case POSITION.LOJACK:
                setTable(createLojack());
                break;
            case POSITION.HIJACK:
                setTable(createHijack());
                break;
            case POSITION.CUTOFF:
                setTable(createCutoff());
                break;
            case POSITION.BUTTON:
                setTable(createButton());
                break;
            case POSITION.SMALL_BLIND:
                setTable(createSmallBlind());
                break;
            case POSITION.BIG_BLIND:
                setTable(createSmallBlind());
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
            case POSITION.UTG:
                title = 'Under The Gun';
                break;
            case POSITION.UTGp1:
                title = 'Under The Gun +1';
                break;
            case POSITION.UTGp2:
                title = 'Under The Gun +2';
                break;
            case POSITION.LOJACK:
                title = 'Lojack';
                break;
            case POSITION.HIJACK:
                title = 'Hijack';
                break;
            case POSITION.CUTOFF:
                title = 'Cutoff';
                break;
            case POSITION.BUTTON:
                title = 'Button';
                break;
            case POSITION.SMALL_BLIND:
                title = 'Small Blind';
                break;
            case POSITION.BIG_BLIND:
                title = 'Big Blind';
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