//과거 습관 : 인덱스로 문자열의 문자에 접근한다.

const str = "testing";
for (let i = 0; i < str. length; ++i) {
  console.log(str[i]);

}

//새로운 습관 : 문자열을 코드 단위가 아닌 일련의 코드 포인트로 처리하려면 code
//pointat 또는 for-of 또는 기타 유니코드 인식 기능을 사용하자.

const str = "testing";
for (const ch of str) {
  console.log(ch);
}
