console.log("foo" + obj);
//hint = default, returning 42
// foo 42




//더하기 연산자(+)를 사용하면 선호도가 없기때문에 Symbol.toprimitive 메서드는
//다음과 같이 "default" 힌트로 호출된다.