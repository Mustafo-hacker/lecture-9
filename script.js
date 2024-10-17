// task1
// function func(a) {
//     const vowels = 'aeiouAEIOU';
//     if (a.length != 3) {
//         return false;
//     }
//     return vowels.includes(a[0]) && vowels.includes(a[2]) || !vowels.includes(a[0]) && !vowels.includes(a[2]);
// }
// console.log(func("ata"))
// console.log(func("cat"))
// console.log(func("pat"))
// console.log(func("paa"))
// console.log(func("pat"))
// console.log(func("app"))



// task2
// function func(a) {
//     let number = a.split(',')
//     let total = 1;
//     for (i = 0 ; i < number.length;i++) {
//       let res1 = Number(number[i])
//       total = total * res1
//     }
//     return total;
// }
// console.log(func("2, 3, 5"))



// task3
// function func(a) {
//     let b = 'r'.repeat(a);
//     return "bu"+b+"p"
// }
// console.log(func(5));



//task 4
// function func(a){
//     let ttl = 0 
//     for(let i = a; i > 0; i = Math.floor(i/10)){
//         ttl = ttl + i % 10
//     }
//     return a % ttl == 0
// }
// console.log(func(209))
// console.log(func(41))



// task5
// function func(a){
//     if(a.length % 2 == 0){
//             return a.charAt(1) + a.at(2)
//     }
//     else{
//         return a.at(3)
//     }
// }
// console.log(func("test"))
// console.log(func("testing"))



function func(word) {
    const vowels = "aeiou";
    let vowelCount = 0;
      if(vowels.includes(vowels)){
        vowelCount++
      }
    return vowelCount;
}
console.log(func("cheesacake"))

