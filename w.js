let seconds = 0
const inervalId = setInterval(() => {
    ++seconds;
    if (seconds >= 10) {
        clearInterval(inervalId);
    }
    console.log(seconds);
}, 1000)