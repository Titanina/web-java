//Object.keys를 추가하여 키가 문자열(심볼 아님)인 객체 고유의 열거 가능한
//속성 이름 배열을 제공한다.  Object.values는 논리적 대응 요소이다.
//즉 동일한 속성 값의 배열을 제공한다.
//상속된 속성 열거할 수 없는 속성 및 심볼로 키가 지정된 속성의 값은 포함되지않는다

const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log (Object.values (obj)); // [1, 2, 3]
