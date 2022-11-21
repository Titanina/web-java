//서로 의존하지않고 수행해야하는 3개의 비동기작업을 수행할떄 
//promise.all를 사용한다면, 병렬로 실행할수 있는 세가지작업을 기다릴수 있다.

Promise.all([firstOperation(), secondOperation(), thirdOperation()])
.then(([firstResult, secondResult, thirdResult]) => {
  // `firstResult`, `secondResult`, `thirdResult`를 여기서 사용
})
  .catch(error => {
    //오류처리
  });

  //Thenable이 아닌 값은 그냥 전달된다는 점.
  //실행할 작업이 두개이고, 전달하려는 세번쨰 값이 있을경우.

  Promise.all([firstOperation(), secondOperation(),42])
  .then(([a,b,c]) => {
    // `a`, `b`, `c`를 여기서 사용한다.
    // `c`는 이 예에서 42가 된다.
  })
  .catch(error => {
    //오류 처리
  });
  