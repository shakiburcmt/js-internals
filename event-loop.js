console.log(1111);
console.log(2222);
// console.log(3333);
// setTimeout(() => {
//     console.log(3333)
// })
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(4444);
console.log(5555);