let students = [{
    name: 'Timur',
    age: 17,
    gender: 'male'
}, {
    name: 'Zafar',
    age: 17,
    gender: 'male'
}, {
    name: 'Nigina',
    age: 17,
    gender: 'female'
}, {
    name: 'Madina',
    age: 16,
    gender: 'female'
}, {
    name: 'Samir',
    age: 14,
    gender: 'male'
}, {
    name: 'Aziz',
    age: 15,
    gender: 'male'
}, {
    name: 'Mirjalol',
    age: 18,
    gender: 'male'
}, {
    name: 'Umar',
    age: 16,
    gender: 'male'
}, {
    name: 'Maxdi',
    age: 15,
    gender: 'male'
}, {
    name: 'Munis',
    age: 18,
    gender: 'male'
}, {
    name: 'Laziz',
    age: 15,
    gender: 'male'
}]

let total = students.reduce((a, b) => {
    return a + b.age
}, 0)
let average = total / students.length
console.log(average.toFixed(1));
let male = []
let female = []

students.filter(student => {
    if (student.gender === 'male') {
        male.push(student.name)
    } else {
        female.push(student.name)
    }
})
console.log(male, female);