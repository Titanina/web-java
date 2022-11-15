const arr = [1, 2];
const first = arr[0], second = arr[1];
console.log(first, second); // 1,2

// 객체 디스트럭처링이 객체 리터럴과 똑같은 구문을 사용하는 거처럼
//배열 디스트럭처링은 배열 리터럴과 똑같은 구문 사용.
//각 대상이 받는 값은 패턴위치에 따라 다름.
//first는  arr[0]에서 0번째위치에 잇는 값을 가져오고,
//second는 arr[1]에서 1번쨰 위치에 있는 값을 가져온다.

const arr = [1,2];
const [, second] = arr;
console.log(second); // 2

//원하지않는 요소를 제외하는것은 유효하다. 0번째 위치엔 변수를 없게해보았다.

const arr = [1,2,3,4,5]; 
const [, b , , , e] = arr;
console.log(b, e); // 2, 5

// 또한 배열이 여러개일떄 중간에 간격을 둘수 있다.

