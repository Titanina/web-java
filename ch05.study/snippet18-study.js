const a = Symbol("my symbol");
console.log(a); // Symbol(my symbol)
const b = Symbol("my symbol");
console.log(b); // Symbol(my symbol)
console.log(a === b); // false
const obj = {
  [a]  : 6,
  [b]  : 7
};

console.log(obj[a]); // 6
console.log(obj[b]); // 7

//문자열이 아닌 심볼로 키가 지정된 속성은 열거 가능한 속성(및 Object.keys의 경우
//자체 속성)인 경우에도 for-in 루프 또는 Object.keys에 반환된 배열에 포함되지않음.
