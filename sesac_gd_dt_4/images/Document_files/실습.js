let today = new Date();
let day = today.getDay();
if (day == 0 || day == 6) {
    console.log('주말입니다');
} else {
    console.log('평일입니다');
}

console.log(Math.floor(Math.random() * 11));
