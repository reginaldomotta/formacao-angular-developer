"use strict";
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(['felipe', 'goku'], ['vegeta']);
numArray.push(6);
console.log(numArray);
console.log(stgArray);
