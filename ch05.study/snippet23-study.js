//열거 가능한 고유한 문자열 키속성에 접근하는 방법외에도 이름,값 배열의 
//배열을 제공하는 Object.entries로 추가했다.

const obj = {

  a: 1,
  b: 2,
  c: 3

};
console.log (Object.entries(obj)); [["a", 1] ["b", 2], ["c", 3]]

