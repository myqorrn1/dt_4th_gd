// JSON
const car = `{
    "model" : "ioniq 5",
    "company" : "hyundai",
    "year" : 2023,
    "options" : ["side mirror", "smart sensor"]
}`;
console.log(car); // format : JSON

// ** 역직렬화 : JSON.parse() -> 통신하여 받은 데이터를 "객체"로 변환
// json -> js obj
const obj = JSON.parse(car);
console.log(obj); // js obj

// obj 변수는 js object이므로 .연산자 이용해 키 값에 접근 가능
console.log(obj.model); //ioniq 5
console.log(obj.options);
console.log(obj.hello); // undefined( 존재하지 않는 키값 이므로!)

// ** 직렬화 : JSON.stringify() -> 통신하기 쉬운 포맷(JSON) 으로 변환
// js obj -> json
const json = JSON.stringify(obj);
console.log(json, typeof json); // {"model":"ioniq 5","company":"hyundai","year":2023,"options":["side mirror","smart sensor"]}
// string

// json  변수는 json형태의 "문자열" 이므로
// .연산자를 이용해서 키 값에 접근이 불가능
console.log(json.model); // undefined

// json 변수는 string 타입이므로
// string 타입에 쓸 수 있는 '내장 메소드'들은 쓸 수 있음.
console.log(json.split(''));
console.log(json.toUpperCase());
