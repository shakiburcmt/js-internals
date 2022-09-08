console.log('first');
console.log('second');
// console.log('third');
// setInterval(() => {
//     console.log('third')
// }, 1500)
let seconds = 1
// setInterval(() => {
//     console.log(seconds++)
// }, 1500)
const inervalId = setInterval(() => {
    // console.log(seconds++);
    if (seconds >= 10) {
        clearInterval(inervalId);
    }
}, 1000)
// console.log('fourth');
const timeoutId = setTimeout(() => { console.log('fourth') }, 3000);
console.log('fifth');