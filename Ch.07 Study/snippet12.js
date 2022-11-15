const source = {example: 42};
const dest = {};
({example: dest.result}= source);
console.log(dest.result); // 42 


//대상을 명시적으로 지정할때 디스트럭처링 대상은 할당할수 있는 모든대상이될수있다.

let source = {a: "ayy", b: "bee"};
let name = Math.random() < 0.5 ? "a" : "b";
let {[name] : dest} = source;
console.log(dest); // 반은 "ayy", 반은 "bee"

//이 코드에서 name 변수가 값 "a"를 가져오는 확률이 절반. "b"를 가져올 확률이 절반
//따라서 dest 변수는 절반의 확률로 a 속성에서 값을, 나머지 확률로 b값을 가져온다.
