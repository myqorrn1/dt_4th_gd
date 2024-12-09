// 반복문

// 1. for문
// * 구문
// for([변수선언 & 초기 값 설정]; [조건식(범위지정)]; [증감식]){
//      반복시킬 코드 내용 입력.
//  }

for (let i = 0; i < 10; i++) {
    // i가 0~9. 총 10번 반복함
    console.log('안녕', i);
}

// 1~5 출력
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// 5~1 출력
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(i, sum);
}
console.log(sum);

// 2. for ~ if 중첩
// *간단실습
// Q) 1~20 중에서 짝수의 합을 구하기.

// Hint 1) 1~20 까지 숫자를 반복
// Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// Hint 3) for문 안에 if문 조합 해보세요.

let sum2 = 0; // "짝수의 합" 저장할 변수 선언.
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        sum2 += i;
    }
    // console.log(i, sum2);
}
console.log(sum2);

/* ---------------------------------------- */

// 3. while 문
// * 구문
// while(조건){ 조건이 참일때 실행할 코드 }
// for 문과는 달리 값을 제어하는 구문이 기본적으로 포함이 되어 있지 않기 때문에 무한루프가능!
// 조건이 항상 참이라면? while문을 빠져나가지 못하고 끝없이 반복하겠지요?
// 따라서 주의하여 사용이 필요합니다!

// ex)
let idx = 0;
while (idx < 10) {
    console.log('안녕', idx);
    // idx = idx + 1;
    idx += 1;
}
// let idx2 = 0;
// while (true) {
//     // 의도적 무한루프
//     console.log('안녕', idx2);
//     // idx2 = idx2 + 1;
//     idx2 += 1;

//     // 무한루프를 빠져나오는 조건!!!!
//     if (idx2 === 10) {
//         break;
//     }
// }

// while문 구구단
let i = 2,
    j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
    j = 1;
}

// Q) 1 부터 20까지의 홀수 합 구하기 (while 사용)
let num = 1; // 초기값 설정 (1부터 시작)
let sum3 = 0;
while (num <= 20) {
    // num이 20 이하일때 반복.
    if (num % 2 == 1) {
        //num이 홀수인지 확인.
        sum3 += num; //홀수면 합에 더해주기.
    }
    num++;
}
console.log(sum3);

// Q) 10 부터 1까지 역순으로 숫자 출력하기.(while사용)
let num2 = 10;
while (num2 >= 1) {
    // 조건 : num2가 1이상 일때 반복
    console.log(num2); // 현재숫자출력
    num2--; // num2 를 1씩 감소
}

// 4. do ~ while 문
/* while 문과 비슷하지만, 조건을 반복문 실행 후 , 확인함.
조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사한다.
즉, 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속함! */

/* 구문

do {
    실행할 코드 내용
} while(조건);

*/
//ex
let g = 1;
do {
    console.log('g => ', g);
    g++;
} while (g <= 5);
// 1 2 3 4

//ex2
// let number;
// do {
//     number = parseInt(prompt('숫자를 입력하세요 (10보다 큰): '), 10);
// } while (number <= 10);
// console.log('입력한숫자:', number);
// 10보다 작은 수를 입력하면 조건을 계속해서 만족하기 때문에 prompt가 반복 실행됨.

// 5. break , continue
// -반복문에서 사용되는 제어문.

// break
// - 반복문을 완전히 중단하고 빠져나옴.

// continue
// - 현재 반복을 중지하고 다음 반복으로 넘엄감. (이번 회차 건너뛰기)

// ex) break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    } // i가 5일때 중단. 그러므로 다음 코드인 "console.log도 실행 안해서" 콘솔에 안찍힌다!!
    console.log(i);
} // 1 2 3 4

// ex) continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    } // i가 3일때를 넘어가버림.
    console.log(i);
} // 1 2 4 5

// Q) for문을 사용한 별 찍기.
// 결과모습)
/* 높이 5 입력
 *     *    // 공백: h-1
 *    **    // 공백: h-2
 *   ***
 *  ****
 * *****    // 공백: h-5
 */
// Hint 1) prompt 사용해서 높이를 입력받기. 10진수의 정수형으로 변환.
// Hint 2) 각줄의 내용을 저장할 문자열 변수 만들기
// Hint 3) 문자열 과 문자열을 더한다.
// Hint 4) for문 중첩.

// const height = parseInt(prompt('높이를 입력하세요'), 10);
// height = 5 로 지정해놓고 해보겠음.
for (let i = 1; i <= 5; i++) {
    let line = ''; // 각 줄의 내용을 저장할 문자열

    // line에 공백 추가
    for (let j = 1; j <= 5 - i; j++) {
        line += ' '; // 띄어쓰기가 공백
    }
    // line에 별 추가
    for (let s = 1; s <= i; s++) {
        line += '*';
    }
    console.log(line);
}
