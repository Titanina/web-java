//프라미스 연결은 try/catch 블록과 매우 유사함.

//동기 작업으로 만든 동일 로직

try {
  const firstResult = firstOperation();
  const secondResult = secondOperation(firstResult);
  const thirdResult = thirdOperation(secondResult * 2 );
  //여기에 `thirdResult` 사용
} catch (error) {
  console.error(error);
}
