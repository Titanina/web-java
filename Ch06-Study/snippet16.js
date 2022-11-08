function* usingReturn() {
  yield 1;
  yield 2;
  return 3;
}

console.log("Using for-of:");
for (const value of usingReturn()) {
  console.log(value);
}
//=>
// 1
// 2

console.log("Using the generator directly:");
const g = usingReturn();
let result;
while (!(result = g.next()).done) {
  console.log(result);

}

// = >
// {value: 1, done: false}
// {value: 2, done: false}
console.log(result);
// = >
// {value: 3, done: true}

//for-of는 done = true 결과 객체값을 보지못한다 왜냐햐면 여러분이 본 
//while 루프처럼 value를 보지않고 done을 확인하고 종료하기때문
//최종 console.log(result);는 done = true와 함꼐 반환값을 보여준다.
//제네레이터는 반환값을 한번만 제공한다. done=true 결과 객체를 얻은 후에도 
//next를 계속 호출하면 done = true, value = undefined인 결과 객체를 얻는다.