//Promise.resolve는 thenable이 어떻게 확정되는지에 따라 반환하는 프라미스가 
//정해지기떄문에 thenable을 네이티브 프라미스로 변환하는데 매우 편리하다.
//프라미스, thenable 또는 평범한 값이 될수있는 x(Promise.resolve를 통해 전달함)
//라고 부르겠다.

x = Promise.resolve(x);

//x는 항상 프라미스다. promsie.resolve를 통해 매개변수 실행.

function PLog(x) {
  Promise.resolve(x)
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.error(error);
  });
}

//그런 다음 단순한 값으로 호출할 수 있다.

PLog(42);
// => 42(하나의 "틱" 이후, 비동기화임이 보장되어 있으므로)
//또는 프라미스 또는 기타 thenable으로도 호출할수있음.

PLog(new Promise(resolve => setTimeout(resolve, 1000, 42)));
// => 42(약 ~1000ms 이후)

//프라미스/thenable 이 거부할수 있으므로 Promise.resolve의 프라미스도 거부할수 있다.

pLog (new Promise((resolve, reject) => {
        setTimeout(reject, 1000, new Error("failed"));

}));
//=> 에러: 실패함(약 ~1000ms 이후)