import creatTable from "./CreateTable";
import {select, selectPairs} from './KeySelection';

const utg = creatTable();
const keyset_Pair = selectPairs('A', '6');
const keyset_As = select('A', 'K', '9', 's');
const keyset_Ks = select('K', 'Q', 'T', 's');
const keyset_Qs = select('Q', 'J', 'T', 's');
const keyset_s = ['A5s', 'JTs', 'T9s', '98s'];
const keyset_Ao = select('A', 'K', 'Q', 'o');

const keysets = [keyset_Pair, keyset_As, keyset_Ks, keyset_Qs, keyset_s, keyset_Ao];

for (let i = 0; i < keysets.length; i++) {
    const keyset = keysets[i];
    for (let j = 0; j < keyset.length; j++) {
        const key = keyset[j];
        utg.set(key, true);
    }
}

export default utg;