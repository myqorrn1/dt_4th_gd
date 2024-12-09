let today = new Date();
let day = today.getDay();

if (day == 0 || day == 6) {
    console.log('주말입니다');
} else {
    console.log('평일입니다');
}

// switch (day) {
//     case 0:
//     case 6:
//         console.log('주말입니다');
//         break;
//     default:
//         console.log('평일입니다');
//         break;
// }

// day == 0 || day == 6 ? console.log('주말입니다') : console.log('평일입니다');

console.log(Math.floor(Math.random() * 11));

//----------------------------------------------------

const span1 = document.querySelector('span');
span1.innerText = '맛없다 ㅡㅡ;;';
span1.style.color = 'red';
span1.style.fontWeight = 'bold';
