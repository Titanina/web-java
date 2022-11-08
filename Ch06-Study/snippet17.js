function* example() {
  let a = yield + 2 + 30; //잘못됨
  return a;
}

const gen = example();
console.log(gen.next()); // {value: 32, done : false}
console.log(gen.next(10)); // {value : 10, done : true}

// 2앞에 잇던 단항연산자 +는 2에아무것도하지않는다.(이미 숫자라서)
// 덧셈이나 뺄셈 대신 곱셈을 사용하려면 구문 오류 발생.