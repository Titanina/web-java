const obj = Object.fromEntries ([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);
console.log(obj);
// => {a : 1, b : 2 , c : 3}

//Object.fromEntries은 유틸리티 함수로, 키/값 쌍의 목록(반복가능)을 받아 객체 생성
//fromEntries은 Object.entries의 반대다.
//Map.prototype.entries는 Object.fromEntries가 예상하는 정확한 유형의 목록을
//반환하므로 맵을 객체로 변환하는 데 편리하다.
