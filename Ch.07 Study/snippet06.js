// 객체에 디스트럭처링 패턴에서 지정한 속성이 없으면 undefined 값을 얻는다
// 수동에서 디스트럭처링 할때와 마찬가지로.

const obj = {first: 1, second: 2};
const {third} = obj;
console.log(third); // undefined

//수동 디스트럭처링과 달리 속성이 없거나 값이 undefined인 경우에만 적용되는
// 기본값을 적용가능.

const obj = {first: 1, second: 2};
const {third = 3} = obj;
console.log(third); // 3

//값을 지정했을떄.

