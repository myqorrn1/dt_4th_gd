const girl = {
    name: '성춘향',
    age: 16,
};
const boy = {
    name: '이몽룡',
    age: 18,
    like: ['강아지', '고양이'],
    girfriend: girl,
    isMarried: true,
};
console.log(boy);

let mathScore = '77';
let engScore = '88';
// let mathScore = prompt('수학점수입력');
// let engScore = prompt('영어점수입력');
let avgScore = (parseInt(mathScore) + parseInt(engScore)) / 2;
console.log(`수학,영어 점수의 평균은 ${avgScore}점 입니다.`); // 82.5

//----------------------------------------------
function multifly(num1, num2) {
    return num1 * num2;
}
console.log(multifly(3, 7)); // 21

// const square = function (num) {
//     console.log(num ** 2);
// };
const square = (num) => {
    console.log(num ** 2);
};
square(4); //16
square(11); //121

//-------------------------------------------
// let age = prompt('나이입력');
// function inputAge() {
//     if (age >= 20) {
//         return '성인';
//     } else if (age >= 17) {
//         return '고등학생';
//     } else if (age >= 14) {
//         return '중학생';
//     } else if (age >= 8) {
//         return '초등학생';
//     } else {
//         return '유아';
//     }
// }
// const result = inputAge();
// console.log(result);
