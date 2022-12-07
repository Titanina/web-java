//과거 습관 : for 루프나 some 메서드 등을 사용하여 배열에서 엔트리(또한 해당 인덱스)
//를 찾음

let found;
for (let n = 0; n< Array.length; ++n) {
  if(array[n]. id === desiredId) {
    found = array[n];
    break;
  }
}

//새로운 습관 : find(또는 findindex) 사용을 고려하자.

let found = array.find(value => value.id === desiredId);

//과거습관 :루프를 돌며 배열에 값을 채운다.

//정적인 값일 경우

const array = [];
while (array.length < desiredLength) {
  array[array.length] = value;
}

// 유동적인 값일 경우

const array = [];
while (array.lengh < desiredLength) {
  array[array.length] = determineValue(array.length);
}

//새로운 습관 : Array.Fill 또는 array.from을 사용하자.

//정적인 값일경우

const array = Array(desiredLength).fill(value);

//유동적인 값일 경우

const array = Array.from(
  Array(desiredLength),
  (_, index) => determineValue(index)
)