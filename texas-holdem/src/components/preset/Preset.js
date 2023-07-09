export const rank = ['A', 'K', 'Q', 'J', 'T', '9','8','7','6','5','4','3','2'];
export const shape = ['♥', '♦', '♣', '♠'];

export const SUIT = {SUIT: 's', OFFSUIT:'o'};

export function getRankIndex(rank_c) {
    for (let i = 0; i < rank.length; i++) {
        if(rank[i] === rank_c) {
            return i;
        }       
    }
    return -1;
}

export const VALUE = {FOLD: 'FOLD', RAISE: 'RAISE'}

export const keys = () => {
    const keyArr = Array.from({ length: rank.length }, () => new Array(rank.length));
    for (let i = 0; i < rank.length; i++) {
        const rank1 = rank[i];
        for (let j = 0; j < rank.length; j++) {
            const rank2 = rank[j];
            let key = j > i ? rank1+rank2+SUIT.SUIT : rank2+rank1+SUIT.OFFSUIT;
            keyArr[i][j] = key;
        }
    }
    return keyArr;
};
const keyArr = keys();

export function createTable() {
    const jsonObj = {};
    for (let i = 0; i < keyArr.length; i++) {
        for (let j = 0; j < keyArr.length; j++) {
            jsonObj[keyArr[i][j]] = VALUE.FOLD; 
        }        
    }      
    return jsonObj;
};

function setValueByRange(table, rank1, rank2_from, rank2_to, suit, value) {
    const indexRank2_from = getRankIndex(rank2_from); 
    const indexRank2_to = getRankIndex(rank2_to); 
    for (let i = indexRank2_from; i <= indexRank2_to; i++) {
        const key = rank1+rank[i]+suit;
        table[key] = value;
    }
}

function setValueDiagonal(table, rank1, rank2_from, rank2_to, suit, value) {
    const indexRank1 = getRankIndex(rank1);
    const indexRank2_from = getRankIndex(rank2_from); 
    const indexRank2_to = getRankIndex(rank2_to); 
    for (let i = 0; i < indexRank2_to-indexRank2_from; i++) {
        const key = rank[indexRank1+i]+rank[indexRank2_from+i]+suit;
        table[key] = value;
    }
}

export function createUTG() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '6', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'A', '5', '5', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', 'T', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', 'T', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', 'T', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, 'J', 'T', '8', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', 'Q', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function createUTGp1() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '6', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '4', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '9', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '9', '7', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', 'J', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', 'Q', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function createUTGp2() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '5', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '9', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '9', '6', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', 'J', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', 'Q', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function createLojack() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '4', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '9', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '9', '5', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', 'T', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', 'J', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function createHijack() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '2', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '6', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '9', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'T', '9', '8', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, '9', '8', '7', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, '8', '7', '4', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', 'T', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', 'J', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', 'J', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function createCutoff() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '2', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '7', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '8', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '8', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '9', '3', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '8', '4', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '9', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', 'T', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', 'T', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', 'T', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function createButton() {
    const table = createTable();
    setValueDiagonal(table, 'A', 'A', '2', SUIT.OFFSUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '2', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '6', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, 'T', '9', '6', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, '9', '8', '6', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, '8', '7', '5', SUIT.SUIT, VALUE.RAISE);
    setValueByRange(table, '7', '6', '4', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, '6', '5', '2', SUIT.SUIT, VALUE.RAISE);
    setValueDiagonal(table, '6', '4', '3', SUIT.SUIT, VALUE.RAISE);

    setValueByRange(table, 'A', 'K', '2', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'K', 'Q', '7', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'Q', 'J', '8', SUIT.OFFSUIT, VALUE.RAISE);
    setValueByRange(table, 'J', 'T', '8', SUIT.OFFSUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '9', '6', SUIT.OFFSUIT, VALUE.RAISE);
    setValueDiagonal(table, 'T', '8', '7', SUIT.OFFSUIT, VALUE.RAISE);
    return table;
}

export function mergeTables(table1, table2) {
    const base = createTable();
    const keyset = keys();
    for (let i = 0; i < keyset.length; i++) {
        for (let j = 0; j < keyset[i].length; j++) {
            const key = keyset[i][j];
            const value1 = table1[key] === undefined ? VALUE.FOLD : table1[key].toUpperCase();
            const value2 = table2[key] === undefined ? VALUE.FOLD : table2[key].toUpperCase();
            base[key] = value1 === VALUE.RAISE || value2 === VALUE.RAISE ? VALUE.RAISE : VALUE.FOLD;
        }
    }
    return base;
}

export const deck = () => {
    const cards = [];
    for (let i = 0; i < rank.length; i++) {
        const r = rank[i];
        for (let j = 0; j < shape.length; j++) {
            const s = shape[j];
            cards.push(r+s);
        }
    }
    return cards;
}

export const shuffledDeck = () => {
    const cards = deck();
    for (let i = 0; i < cards.length; i++) {
        let temp = cards[i];
        const ran_i = Math.floor(Math.random()*cards.length);
        temp = cards[ran_i];
        cards[ran_i] = cards[i];
        cards[i] = temp;
    }
    return cards;
}
