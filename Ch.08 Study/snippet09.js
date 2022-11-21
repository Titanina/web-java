const noop = () => {}; // 아무것도 하지않는 함수
/* 뭔가를 한다.
* @param data 뭔가를 하기 위하 ㄴ데이터
* @param time 뭔가를 할 시각
* @param onSucess 두 개의 인수로 호출되는 성공 콜백: 결과, 상태 코드
* param onerror 두개의 인수로 호출되는 실패 콜백(문자열 오류 메시지)

*/

function doSomething({ data, time = 10, onSuccess = noop, onerror = noop} ={})
{
  // ... 
}

//코드가 프라미스 기반이므로 doSomething의 프라미스 기반 버전을 사용하는것이
//유용. 