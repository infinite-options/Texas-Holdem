import creatTable from "./CreateTable";
import {select, selectPairs} from './KeySelection';

const utgP2 = creatTable();
const keyset_Pair = selectPairs('A', '5');
const keyset_As = select('A', 'K', '4', 's');
const keyset_Ks = select('K', 'Q', '9', 's');
const keyset_Qs = select('Q', 'J', '9', 's');
const keyset_Js = select('J', 'T', '9', 's');
const keyset_s = ['98s', '87s', '76s'];
const keyset_Ao = select('A', 'K', 'J', 'o');
const keyset_o = ['KQo'];

const keysets = [keyset_Pair, keyset_As, keyset_Ks, keyset_Qs, keyset_Js, keyset_s, keyset_Ao, keyset_o];

for (let i = 0; i < keysets.length; i++) {
    const keyset = keysets[i];
    for (let j = 0; j < keyset.length; j++) {
        const key = keyset[j];
        utgP2.set(key, true);
    }
}

export default utgP2;