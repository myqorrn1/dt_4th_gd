// 클래스

// 클래스 기본 문법
// #1. class : 클래스를 정의할때 사용하는 키워드
class House {
    // #2. constructor : 클래스의 "생성자"
    // - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
    constructor(year, name, window) {
        // #3. this : 클래스 내부에서 현재 인스턴스를 참조하는 객체.
        // - 인스턴스의 속성, 메서드에 접근할 때 사용.
        // - 현재 인스턴스(this)에 속성(name)을 추가하고, 그 값을 매개변수 name으로 설정하는 것.
        this.year = year;
        this.name = name;
        this.window = window;
    }
    // #4. 메서드 : 클래스 내부에 정의된 함수
    // - 해당 클래스의 인스턴스에서 호출 가능.
    getAge() {
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요`);
    }
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

// #5. 인스턴스 : 클래스로부터 생성된 실제 객체 - new연산자 사용하여 생성.
// 클래스 - 설계도
// 인스턴스 - 설계도로 만들어진 "실제 집"
// - 각각 독립적인 객체. (=각자 자신만의 this를 가짐.)
const house1 = new House(1990, '롯데', 1);
// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 함.
console.log(house1); // House {year: 1990, name: '롯데', window: 1}
console.log(typeof house1); // object
console.log(house1.year); // 1990
house1.getAge(); // 롯데는 건축한지 34년 되었어요
house1.getWindow(); // 롯데의 창문은 1개 입니다.

const house2 = new House(1994, '호반', 2);
console.log(house2); //House {year: 1994, name: '호반', window: 2}

/* ------------------------------------- */
// 클래스의 상속
// - 상속을 통해 다른 클래스의 기능을 재사용 가능하다.
// - 'extends' 키워드를 사용하여 상속 구현.
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        // #6 super() : 부모 클래스의 생성자를 호출할때 사용!!
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의
         총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window} 이다.`;
    }

    // #7. Override(오버라이드): 부모의 메소드와 같은 함수를 재정의할때
    // - 부모 클래스에서 정의된 메서드를 자식 클래스에서 "새롭게 재정의" 하거나 "변경" 하는것을 의미
    // - 주로, 부모 클래스에서 제공한 기본 동작을 "자식 클래스의 특성에 맞게 수정" 할때 사용.

    // **규칙
    // - 메서드 이름, 매개변수 리스트가 부모 클래스와 "동일" 해야함
    getWindow() {
        return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
    }
}
const apt1 = new Apartment(2024, '래미안', 3, 15, '3M');
console.log(apt1); //Apartment {year: 2024, name: '래미안', window: 3, floor: 15, windowMaker: '3M'}
console.log(apt1.getAptInfo());
// 2024년에 지어진 래미안 아파트의 총 층수는 15 이며, 창문의 개수는 3 이다.
console.log(apt1.getWindow());
// 래미안 아파트의 3 개의 창문은 3M 회사에서 생산되었습니다.

// Q)
// 다음 userInfo 객체에서 구조 분해 할당을 사용하여
// name과 age를 추출하고, 나머지 속성은 restInfo 객체에 저장하세요.
const userInfo = {
    name: 'Lee',
    age: 25,
    job: 'Developer',
    city: 'seoul',
};
const { name, age, ...restInfo } = userInfo;
console.log(name, age);
console.log(restInfo);

// Q2)
// 아래 두 배열을 스프레드 연산자를 사용하여 병합한 후,
// 구조분해 할당을 이용해 첫 번째와 두번째 숫자를 first 와 second 변수에 저장하고,
// 나머지 숫자들을 remaining 배열에 저장하세요.

const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];
const spread = [...evenNumbers, ...oddNumbers];
console.log(spread);
const [first, second, ...remaining] = spread;
console.log(first, second, remaining);

// Q3)
/* Shape(직사각형) 클래스의 속성 : 가로와 세로
    Shape 클래스의 메소드 : getArea()
    - 넓이 반환하는 메소드 (가로*세로)
*/
class Shape {
    constructor(hor, ver) {
        this.hor = hor;
        this.ver = ver;
    }
    getArea() {
        return this.hor * this.ver;
    }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12가 나오는지 확인.

// Q4)
class Rectangle extends Shape {
    constructor(hor, ver) {
        super(hor, ver);
    }
    getArea() {
        return this.hor * this.ver;
    }
    getDiagonal() {
        return Math.sqrt(this.hor ** 2 + this.ver ** 2);
    }
}
class Triangle {
    constructor(hor, ver) {
        this.hor = hor;
        this.ver = ver;
    }
    getArea() {
        return (this.hor * this.ver) / 2;
    }
}
class Circle extends Shape {
    constructor(hor, ver, radius) {
        super(hor, ver);
        this.radius = radius;
    }
    getArea() {
        return this.radius ** 2 * Math.PI;
    }
}
let rectangle = new Rectangle(3, 4);
let triangle = new Triangle(3, 4);
let circle = new Circle(3, 4, 5);
console.log(rectangle.getArea());
console.log(rectangle.getDiagonal());
console.log(triangle.getArea());
console.log(circle.getArea());
