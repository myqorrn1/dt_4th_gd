// const girl = {
//     name: '성춘향',
//     age: 16,
// };
// const boy = {
//     name: '이몽룡',
//     age: 18,
//     like: ['강아지', '고양이'],
//     girfriend: girl,
//     isMarried: true,
// };
// console.log(boy);

// let mathScore = '77';
// let engScore = '88';
// // let mathScore = prompt('수학점수입력');
// // let engScore = prompt('영어점수입력');
// let avgScore = (parseInt(mathScore) + parseInt(engScore)) / 2;
// console.log(`수학,영어 점수의 평균은 ${avgScore}점 입니다.`); // 82.5

// //----------------------------------------------
// function multifly(num1, num2) {
//     return num1 * num2;
// }
// console.log(multifly(3, 7)); // 21

// // const square = function (num) {
// //     console.log(num ** 2);
// // };
// const square = (num) => {
//     console.log(num ** 2);
// };
// square(4); //16
// square(11); //121

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

//--------------------------------------

// for (let i = 1; i <= 10000; i++) {
//     if (i % 13 == 0 && i % 2 == 1) {
//         console.log(i);
//     }
// }

// let num = prompt('숫자를 입력하시오');
// if (num % 13 == 0 && num % 2 == 1) {
//     console.log('13의 배수이면서 홀수인 숫자입니다.');
// } else {
//     console.log('13의 배수이면서 홀수인 숫자가 아닙니다!!!');
// }

//------------------------------------------

// for (let i = 2; i <= 9; i++) {
//     console.log(`---${i}단---`);
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0 || i % 5 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

//-------------------------------------------
// for문으로 배열 생성
let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
    // arr[i] = i + 1;은 배열 arr의 i번째 위치에 i + 1 값을 저장하는 코드입니다.
}
console.log(arr);

// for문으로 배열의 합
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += arr[i];
}
console.log(sum);

// for of 문
let sum2 = 0;
for (let a of arr) {
    // 배열 요소 하나하나에 접근
    sum2 += a;
}
console.log(sum2);

// for each 문
let sum3 = 0;
arr.forEach(function (a) {
    sum3 += a;
});
console.log(sum3);

// ------------------------------------
// 아 모르겠다 chat gpt ㄱㄱㄱㄱㄱㄱㄱ
let fruits1 = [
    '사과',
    '딸기',
    '파인애플',
    '수박',
    '참외',
    '오렌지',
    '자두',
    '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];
