//프라미스를 연결(체이닝)하기

//then/catch/finally 핸들러에서 프라미스(또는 thenable)를 생성해 반환
//할수 있는 사실은 프라미스/thenable을 제공하는 일련의 비동기작업을 수행하는
//경우 then을 연속 사용할수있음을 의미한다.
//첫번째 작업을 수행하고, 핸들러가 두번째 작업에 대해 thenable를 반환하고
//필요한만큼 반복.

firstOperation()
.then(firstResult => secondOperation(firstResult)) // 또는 .then(secondOperation)
.then(secondResult => thirdOperation(secondResult * 2))
.then(thirdResult => { /* `thirdResult` 값 사용 */ })
.catch(error => { console.error(error); });

//해당 코드가 실행되면 firstoperation은 첫번째 작업 시작, 프라미스 반환, then
//호출 다음에 발생하는 작업에 따라 핸들러를 설정한다.
