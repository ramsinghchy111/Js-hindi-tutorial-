const marval_heroes = ["Thor","SpiderMan","BatMan"]
const dc_heroes = ["Sahid","Rithik","Aajay"]


const allIn_heroes = marval_heroes.concat(dc_heroes)
console.log(allIn_heroes)

const all_heroes = [...marval_heroes,  ...dc_heroes]
console.log(all_heroes)

const array_numbers = [1,2,3,4,5,[5,6],5,8,[1,[2,3]]]
console.log(array_numbers)
const exp_arry = array_numbers.flat(Infinity)
console.log(exp_arry)

console.log(Array.from("RAMSINGH"))
console.log(Array.from({name:"Chaudhary"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
