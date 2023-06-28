import {ranks} from './Card';

export function getIndexOfRank(rank) {
    for (let i = 0; i < ranks.length; i++) {
        if(ranks[i] === rank) {
            return i;
        }
    }
    return -1;    
}

// Arguments should follow the map rule on Table.js
export function select(firstRank, secondFrom, secondTo, suit) {
    const keys = [];
    const index_from = getIndexOfRank(secondFrom);
    const index_to = getIndexOfRank(secondTo); 
    for (let i = index_from; i <= index_to; i++) {
        keys.push(firstRank+ranks[i]+suit);        
    }
    return keys;
}

// Arguments should follow the map rule on Table.js
export function selectPairs(rank_from, rank_to) {
    const keys = [];
    const index_from = getIndexOfRank(rank_from);
    const index_to = getIndexOfRank(rank_to); 
    for (let i = index_from; i <= index_to; i++) {
        keys.push(ranks[i]+ranks[i]);        
    }
    return keys;
}