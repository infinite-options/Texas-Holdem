import creatTable from "./CreateTable";
import {select, selectPairs} from './KeySelection';

const lojack = creatTable();
const keyset_Pair = selectPairs('A', '4');
const keyset_As = select('A', 'K', '4', 's');
const keyset_Ks = select('K', 'Q', '9', 's');
const keyset_Qs = select('Q', 'J', '9', 's');
const keyset_Js = select('J', 'T', '9', 's');
const keyset_s = ['98s', '87s', '76s', '65s'];
const keyset_Ao = select('A', 'K', 'T', 'o');
const keyset_Ko = select('K', 'Q', 'J', 'o');

const keysets = [keyset_Pair, keyset_As, keyset_Ks, keyset_Qs, keyset_Js, keyset_s, keyset_Ao, keyset_Ko];

for (let i = 0; i < keysets.length; i++) {
    const keyset = keysets[i];
    for (let j = 0; j < keyset.length; j++) {
        const key = keyset[j];
        lojack.set(key, true);
    }
}

export default lojack;