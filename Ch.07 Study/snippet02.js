let obj = {first : 1, second : 2};
let {third : c}= obj;
console.log(c); // undefined, obj는 'third'라는 속성이 없다.

// 이 디스트럭처링은 let c = obj.third;와 정확히 동일하므로 동일한 작업 수행

let obj = {first: 1, second : 2};
let {first} = obj;
console.log(first); // 1

// 위와 같이 반복하지않고 속성이름을 변수이름으로 사용하는것이 매우 일반적.
//콜론과 이름은 생략가능.

let first = obj.first; // 수동 디스트럭처링이 이름을 반복하기에 이전보다 더 간결.
