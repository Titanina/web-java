console.log(2 + obj);
//hint = default, returning 42
// 44

//더하기 연산자일경우 다른 피연산자가 문자열, 숫자또는 다른 무엇이든 "default"이다


console.log(2 - obj);
// hint = number, returning 42
// -40
//뺴기 연산자(-)이면 다음과 같이 힌트는 "number"이다.

console.log(String(obj));
//hint = string, returning "str"
// str
console.log("this is a string".indexOf(obj));
// hint = string, returning "str"
// 10 (the index of "str" "in this a string")

//메서드는 기본값을 반환해야하며 그렇지않으면 typeError 발생 값이 힌트와 일치
//안해도된다.

