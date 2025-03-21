"use strict";
const xpto = { id: 1, name: 'motta' };
console.log(xpto);
function printaObejto(pessoa) {
    console.log(pessoa);
}
printaObejto({
    name: 'bruce wayne',
    vulgo: 'batman',
});
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return 'hello';
    }
}
const p = new Pessoa(1, 'gutsman');
console.log(p.sayHello());
