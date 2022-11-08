//제네레이터를 사용했을떄.

const a = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
  [Symbol.iterator]: function*() {
    for (let index = 0; index < this.length; ++index) {
      yield this[index];
    }
  }
};

for (const value of a ) {
  console.log(value);
}

//이 예에서는 속성 정의 문법을 사용한다.
//[Symbol.iterator]: function*() {}