import {ranks} from './Card';

/**
 * Map Rules
 * 1. There are three types of key. The keys for suited, offsuited, and paired.
 * 2. On naming keys, higher rank of card comes first.
 * 3. Key for suited: Rank1+Rank2+s
 *    Key for offsuited: Rank1+Rank2+o
 *    Key for paired: Rank+Rank
 * 4. The values of the map are boolean.
 */

function setUnpairedMap(table, suit) {
    for (let i = 0; i < ranks.length; i++) {
        const firstCard = ranks[i];
        for (let j = i+1; j < ranks.length; j++) {
            const secondCard = ranks[j];
            const key = firstCard+secondCard+suit;
            //console.log(key);
            table.set(key, false);
        }        
    }
    return table;
}

function setPairedMap(table) {
    for (let i = 0; i < ranks.length; i++) {
        const card = ranks[i];
        const key = card+card;
        table.set(key, false);      
    }
    return table;
}


export default function creatTable() {
    const cardTable = new Map();
    setUnpairedMap(cardTable, 's');
    setUnpairedMap(cardTable, 'o');
    setPairedMap(cardTable);
    return cardTable;
};