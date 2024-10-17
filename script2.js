// task1
// function func(a) {
//     let { name, age, location } = a;
//     return `${name} is ${age} years old and lives in ${location}.`
// }
// let personInfo = {
//     name: "John",
//     age: 30,
//     location: "Seattle"
// };

// console.log(func({ name: "Mustafo", age: 15, location: "Kulob" }))



// task2
// function func(a){
//     let { upvotes, downvotes } = a
//     let total = upvotes - downvotes
//     return total
// }

// let info = {
//     upvotes: 13,
//     downvotes: 0
// }
// console.log(func({ upvotes: 2, downvotes: 33 }))



// task3
// function func(a) {
//     let result = a.reduce((ac, cv) =>
//         ac + cv.price, 0)

//     return result
// }
// let info = [
//     {
//         name: "book",
//         price: 30,
//     },
//     {
//         name: "pen",
//         price: 35,
//     },
//     {
//         name: "pencil",
//         price: 40,
//     },
// ]
// console.log(func([{ name: "book", price: 30 }, { name: "pen", price: 30 }, { name: "pencil", price: 30 }]))



// task4
// function func(a) {
//     let { born } = a;
//     return 2024 - born 
// }
// let personInfo = {
//     firstName: "John",
//     LasName: "Johns",
//     born: 2000,
// };

// console.log(func({ firsName: "Mustafo",LasName:"Hafizov", born: 2000,}))



// task5
// function func(a) {
//     let { title, author, ratings, mark } = a;
//     return `${title} ${author}  ${ratings} ${mark}`
// }
// let personInfo = {
//     title: "John",
//     author: 30,
//     ratings: "ratings",
//     mark:" [5, 4, 5, 3, 4]"
// };

// console.log(func({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", ratings:"ratings:",mark:"4.3" }))



// task6
// function func(a) {
//    return Object.keys(a).length;
// }
// console.log(func({a:"idiot",b:"idiot",c:"idiot",}));



// task7
// function func(a) {
//     const figure = {
//         3: 'Triangle',
//         4: 'Square',
//         5: 'Pentagon',
//         6: 'Hexagon',
//         7: 'Heptagon',
//         8: 'Octagon',
//         9: 'Nonagon',
//         10: 'Decagon'
//     };
    
//     return figure[a]
// }
// console.log(func(3))



// task 8
// function func(a) {
//     let res1 = Object.values(a);
//     let res2 = Object.keys(a)[1];
//     let result = res1.join(' ') +' '+ a[res2];
//     return result
// }
// console.log(func(({ 1: "Mommy", 2: "please", 3: "help" })))



// task9
// function func(a, b) {
//     return a.hasOwnProperty(b);
// }
// console.log(func({ a: 44, b: 45, c: 46 },"44"))
// console.log(func({ pot: 1, tot: 2, not: 3 }, "not"))



// task10
// function func(a) {
//     return Math.min(...Object.values(a));
// }
// console.log(func({cyan:"23",magneta:"25",yellow:"10"}))



// task11
// function func(a) {
//     return Object.keys(a).length === 0;
// }
// console.log(func({a:1}))
// console.log(func({a}))



// task12
// function func(a, b, c) {
//     return { ...a, [b]: c };
// }
// console.log(func({ piano: 500, stereo: 300 }, "Caligula", 440))
