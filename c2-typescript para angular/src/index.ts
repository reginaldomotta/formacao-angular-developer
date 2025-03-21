type heroi = {
 name: string
 vulgo: string
}

type robot = {
 id: number
 name: string
}

interface robot2 {
 id: number
 name: string
 sayHello(): string
}

const xpto: robot = { id: 1, name: 'motta' }

console.log(xpto)

function printaObejto(pessoa: heroi) {
 console.log(pessoa)
}

printaObejto({
 name: 'bruce wayne',
 vulgo: 'batman',
})

class Pessoa implements robot2 {
 id: number
 name: string

 constructor(id: number, name: string) {
  this.id = id
  this.name = name
 }
 sayHello(): string {
  return 'hello'
 }
}

const p = new Pessoa(1, 'gutsman')
console.log(p.sayHello())
