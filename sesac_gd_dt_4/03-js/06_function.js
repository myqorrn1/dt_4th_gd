// 함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합.

// 구조
// keyword: function
// name: 함수이름, 카멜표기법으로
// parameter: 함수 선언시 매개변수로 받을 것.
// body: 함수 내부코드(scope 라고도 함.)

// 용어정리
// 함수 정의(선언): 함수를 "생성"
// 함수 호출: 함수를 "사용"

// 함수 선언 방식
// 1. 명시적 함수 선언 (= 함수 선언문)
// - 함수 이름과 매개변수를 명시하고 함수의 본문을 중괄호로 감싼다.
// - 스크립트 어디에서든 호출 할 수 있다.
// - "function" 키워드를 사용하여 함수를 선언하는 방식이다.

function helloWorld() {
    // 함수 정의(선언 = "생성")
    // return 생략가능( 반환값이 없음)
    console.log('hello, world!');
}
helloWorld(); // 함수 호출(= "사용")

function helloWorld2() {
    // 생성
    return 'hello, world! 2';
}
// helloWorld2();
console.log(helloWorld2());

// *return 이란? 반환값.
// : 함수 내부 코드의 "최종 결과 값"
// 최종 결과 값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단됨.( return 다음에 코드 더 작성은 의미가 없다.)

// 2. 함수 표현식
// ** "변수"에 "익명 함수"를 할당(저장)하는 형태. (JS에서는 함수도 값 이기에 가능함)
// => 함수가 들어있는 변수를 사용하는 방법!!
// 변수가 선언된 이후에만 호출할 수 있다.

// * 익명 함수란?
// 말 그대로 "이름이 없는" 함수.
// 이름을 지정할 수도 있음
// => 단, 이 경우에는 함수 이름은 '내부'에서만 사용 가능함!!
// ex)
const sayHello = function hello() {
    console.log('hello');
};
// sayHello(); //hello 출력
// hello(); //hello is not defined

const helloWorld3 = function () {
    //return 생략버전
    console.log('hello, world! 3');
};
const helloWorld4 = function () {
    //return 있는버전
    return 'hello, world! 4';
};
helloWorld3();
console.log(helloWorld4());
helloWorld3();
helloWorld3();
helloWorld3(); // 함수는 여러번 호출이 가능해서 사용에 용이하다!!

/////// 매개변수가 있는 함수는 어떻게 하나?? ///////
// 1) 매개변수가 1개
function food(text) {
    return text;
}
console.log(food('제육'));

const drinkPrice = 2000;
console.log(food(drinkPrice));

// 2) 매개변수 2개
function music(name, title) {
    return `${name} - ${title}`;
}
console.log(music('DEAN', 'NASA'));

// 이렇게도 가능!
function music2(name, title) {
    console.log(`${name} - ${title}`);
}
music2('DEAN', 'NASA');

// 3. 화살표 함수
// 함수 표현식의 축약형. 간결하게 정의
// 단일 표현식의 경우에는 중괄호와 return 생략 가능
// 코드가 길어진다면 중괄호와 return 키워드 명시!
// - 함수명 쓰지 않음.

// 일반형( 단일 표현식 )
// function square(x) {
//     return x * x;
// }

// 축약형
const square = (x) => x * x;
console.log(square(3)); // 9

// 일반형(여러줄)
// function triangle(base, height) {
//     const area = (base * height) / 2;
//     return area;
// }

// 축약형
const triangle = (base, height) => {
    const area = (base * height) / 2;
    return area;
};
console.log(triangle(3, 4)); // 6

// * 호이스팅 -> 함수, 변수
// JS에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상.
// "함수 선언문"이 호이스팅!
// 변수에서는 "var"

sayHello5();
function sayHello5() {
    console.log('hello');
} // 정상출력
// 그렇다면 "호이스팅" 이 좋은거? 나쁜거???
// => 좋고 나쁘다는 없다. 코드를 읽기 쉽게하지만 혼동을 줄 수 있으므로 주의.
// 코드의 가독성을 높이기 위해서는 "함수선언" 을 가능한 상단에 위치시키는것이 좋다.

// 함수 표현식
// 호이스팅 대상이 될 수 없음.
// 왜??
// 변수에 함수가 할당되기 때문에 그 이후에만 호출이 가능함!!
// sayHello6(); // error
const sayHello6 = () => {
    console.log('hello2~~');
};
sayHello6();
