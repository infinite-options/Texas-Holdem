import creatTable from "./CreateTable";
import {select, selectPairs} from './KeySelection';

const hijack = creatTable();
const keyset_Pair = selectPairs('A', '2');
const keyset_As = select('A', 'K', '2', 's');
const keyset_Ks = select('K', 'Q', '8', 's');
const keyset_Qs = select('Q', 'J', '9', 's');
const keyset_Js = select('J', 'T', '9', 's');
const keyset_Ts = select('T', '9', '8', 's');
const keyset_9s = select('9', '8', '7', 's');
const keyset_s = ['87s', '76s', '65s', '54s'];
const keyset_Ao = select('A', 'K', 'T', 'o');
const keyset_Ko = select('K', 'Q', 'J', 'o');
const keyset_Qo = select('Q', 'J', 'J', 'o');

const keysets = [keyset_Pair, keyset_As, keyset_Ks, keyset_Qs, keyset_Js, keyset_Ts, keyset_9s, keyset_s, keyset_Ao, keyset_Ko, keyset_Qo];

for (let i = 0; i < keysets.length; i++) {
    const keyset = keysets[i];
    for (let j = 0; j < keyset.length; j++) {
        const key = keyset[j];
        hijack.set(key, true);
    }
}

export default hijack;