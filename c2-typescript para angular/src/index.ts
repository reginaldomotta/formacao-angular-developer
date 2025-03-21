class Character {
 protected name: string
 protected stregth: number
 protected skill: number

 constructor(name: string, stregth: number, skill: number) {
  this.name = name
  this.stregth = stregth
  this.skill = skill
 }

 attack(): void {
  console.log(`Attack with ${this.stregth} points`)
 }
}

class Magician extends Character {
 magicPoints: number
 constructor(
  name: string,
  stregth: number,
  skill: number,
  magicPoints: number
 ) {
  super(name, stregth, skill)
  this.magicPoints = magicPoints
 }
}

const p1 = new Character('ryu', 10, 98)
p1.attack()

const p2 = new Magician('mago', 9, 30, 100)
console.log(p2)
