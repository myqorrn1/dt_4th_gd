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
// Hint 1) 1~20 까지 숫자를 반복
// Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// Hint 3) for문 안에 if문 조합 해보세요.

// Q) 1~20 중에서 짝수의 합을 구하기.
let sum2 = 0; // 짝수의 합 저장할 변수 선언.

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        sum2 += i;
    }
    // console.log(i, sum2);
}
console.log(sum2);
