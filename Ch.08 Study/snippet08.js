//프라미스는 이행 핸들러(여러개 포함)를 추가하기 위한 표준 문법을 ㅔㅈ공하고
//다음 두가지를 보장하여 이를 처리한다.

//핸드러가 호출된다(적절한 종류의 확정, 이행 또는 거부를 위한 경우)
//호출이 비동기다.

//즉 어딘가에서 프라미스를 받는 코드가 있다면 다음을 수행한다.

console.log("이전");
thePromise.then(() => {
  console.log("내부");
});
console.log("이후");
