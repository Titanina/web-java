for (const n of [1,2,3]) {
  console.log(`Line ${n}-1 
  Line ${n}-2`);
}

// 위코드는 다음과 같이 출력한다.

//Line 1-1
  //Line 1-2
//Line 2-1
  //Line 2-2
//Line 3-1
  //Line 3-2

//치환 내용은 자바 스크립트의 표현식이므로, 치환 본문이 복잡한 경우
//줄 바꿈과 들여쓰기를 사용 할수 있다. 
//이는 표현식의 공백일 뿐이므로 문자열에 포함되지 않는다.
