Promise.race([fetchSomething(), timeoutAfter(1000)])
.then(data => {
  // data로 뭔가를 한다.
})

.catch(error => {
  //오류나 타임아웃을 처리한다.
});