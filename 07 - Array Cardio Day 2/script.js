const people = [{
        name: "Wes",
        year: 1988
    },
    {
        name: "Kait",
        year: 1986
    },
    {
        name: "Irv",
        year: 1970
    },
    {
        name: "Lux",
        year: 2015
    },
];

const comments = [{
        text: "Love this!",
        id: 523423
    },
    {
        text: "Super good",
        id: 823423
    },
    {
        text: "You are the best",
        id: 2039842
    },
    {
        text: "Ramen in my fav food ever",
        id: 123523
    },
    {
        text: "Nice Nice Nice!",
        id: 542328
    },
];

// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
    return (new Date()).getFullYear() - person.year >= 19
})

//Another way
// const isAdult = people.some(function(person){
//     const currentYear = (new Date).getFullYear();
//     if(currentYear - person.year >= 19){
//         return true
//     }
// })

console.log(isAdult)



// Array.prototype.every() // is everyone 19 or older?
const AllAdults = people.every(person => {
    return (new Date()).getFullYear() - person.year >= 19
})
console.log(AllAdults)



// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423)

//Another way
// const founded = comments.find(comment => {
//     return comment.id === 823423
// })

console.log(comment)



// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

//deleting method-1, changing content of the existing array
comments.splice(index, 1)

//deleting method-2, creating a new array
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]