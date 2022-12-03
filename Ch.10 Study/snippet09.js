//태그함수로 사용할떄 String.raw는 평가된 치환 값과 결합된 템플릿의
//raw 텍스트 세그먼트가 있는 문자열이 있다.

const answer = 42;
console.log(String.raw`Answer:\t${answer}`); // Answer:\t42
