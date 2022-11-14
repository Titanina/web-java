const obj = {first: 1, second : 2};
let first = obj.first, second = obj.second;
console.log(first, second); // 1,2

// 하나 이상의 속성을 선택할떄 디스트럭처링은 강력해진다.


const obj = getSomeObject();
let frist = obj.first;
let second = obj.second;
//  객체를 반환하는 함수를 호출해야하고 해당 객체에서 두개의 속성만 원한다고
//가정할떄의 작성법이다. 하지만 더 간단하게 할수 있다.

let {frist, second} = getSomeObject();

