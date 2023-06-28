import creatTable from "./CreateTable";
import {select, selectPairs} from './KeySelection';

const cutoff = creatTable();
const keyset_Pair = selectPairs('A', '2');
const keyset_As = select('A', 'K', '2', 's');
const keyset_Ks = select('K', 'Q', '2', 's');
const keyset_Qs = select('Q', 'J', '2', 's');
const keyset_Js = select('J', 'T', '6', 's');
const keyset_Ts = select('T', '9', '6', 's');
const keyset_9s = select('9', '8', '6', 's');
const keyset_8s = select('8', '7', '5', 's');
const keyset_7s = select('7', '6', '4', 's');
const keyset_6s = select('6', '5', '4', 's');
const keyset_5s = select('5', '4', '3', 's');
const keyset_s = ['43s', '32s'];
const keyset_Ao = select('A', 'K', '2', 'o');
const keyset_Ko = select('K', 'Q', '7', 'o');
const keyset_Qo = select('Q', 'J', '8', 'o');
const keyset_Jo = select('J', 'T', '8', 'o');
const keyset_To = select('T', '9', '8', 'o');
const keyset_9o = select('9', '8', '7', 'o');
const keyset_o = ['87o', '76o'];

const keysets = [keyset_Pair, keyset_As, keyset_Ks, keyset_Qs, keyset_Js, keyset_Ts, keyset_9s, keyset_8s, keyset_7s, keyset_6s, keyset_5s, keyset_s, keyset_Ao, keyset_Ko, keyset_Qo, keyset_Jo, keyset_To, keyset_9o, keyset_o];

for (let i = 0; i < keysets.length; i++) {
    const keyset = keysets[i];
    for (let j = 0; j < keyset.length; j++) {
        const key = keyset[j];
        cutoff.set(key, true);
    }
}

export default cutoff;