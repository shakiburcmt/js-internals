function fuck() {
    console.log('third')
}
console.log('first');
console.log('second');
// console.log('third');
setTimeout(fuck);
setTimeout(() => { console.log('third') }, 5000);
// opore 5000 mane 5000 milisecond por output dekhabe

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('fetch received')
        return response.json();
    })
    .then(json => console.log(json))

console.log('fourth');
console.log('fifth');