let obj = {first: 1, second: 2};
let a = obj.first;  // 오래된, 수동 디스트럭처링
console.log(a);     // 1

let obj = {first: 1, second : 2};
let {first : a} = obj; //새로운 디스트럭처링 구문
console.log(a);  // 1

// 아래와 같이 하면 객체 리터럴과 객체 디스트럭처링 패턴이 서로의 이미지를
//효과적으로 미러링함.

let {first : a } = {first : 42};
console.log(a) : //42

