const a = Array.from({length: 100}, (_, index) => index);
// 또는: const a = Array.from(Array(100), (_, index) => index);
console.log(a); // [0, 1, 2, 3, _99]

// {length : 100}와 Array(100) 둘 다 값이 100인 length 속성을 가진 객체를 생성한다.
//콜백은 인데스를 반환하므로, 결과 배열은 엔트리에 인덱스 값을 포함한다.
//rangeArray 함수로 일반화가 가능하다.

function rangeArray(start, end, step = 1) {
  return Array.from(
    {length: Math.floor(Math.abs(end - start) / Math.abs(step))},
    (_, i) => start + (i * step)
  );
}

console.log(rangeArray(0, 5)); // [0, 1, 2, 3, 4]
console.log(rangeArray(6, 11)); // [6, 7, 8, 9, 10]
console.log(rangeArray(10, 20, 2)); // [10, 12, 14, 16, 18]
console.log(rangeArray(4, -1, -1)); // [4, 3, 2, 1, 0]

//Array.from은 mapFn 호출에서 this 값을 결정하는 세 번째 매개변수인 thisArg를
//허용 한다. 따라서 메서드(method)가 있는 객체(example)가 있고
//해당 메서드를 콜백으로 사용하는 경우 다음 코드를 사용하여 메서드에 대한
//호출내에서 exmaple 객체를 참조하는지 확인.

const array = Array.from(Array(100), example.method, example);