function* simple() {
  for (let n= 1; n<=3; ++n) {
    yield n;
  }
}
for (const value of simple()) {
  console.log(value);
}

//코드는 simple을 호출하고 제네레이터 객체를 얻은다음 해당 객체를 for-of에 제공
//for-of는 제너레이터 객체에게 이터레이터를 요청한다. 제너레이터 객체는 자신을 
//이터레이터로 반환한다(제너레이터 객체는 %IteratorPrototype%에서 간접적으로 상속
 // 되므로 "return this" Symbol.iterator 메서드를 갖는다.)
 //for-of는 제너레이터 객체의 next 메서드를 사용하여 루프에서 값을 가져와 각각
 //console.log에 전달한다.

 //function 키워드 뒤에 *를 주목하자. 이것이 제너레이터 함수를 만듬.
 //원하는경우 function 뒤와 * 앞에 공백을 둘 수 있다. 순전히 스타일의 문제다.
 //새 키워드 yield에 주목하자. 제너레이터 함수가 겉보기에 일시 중지된 다음
 //다시 시작된 위치를 표시 그뒤에 입력한 값(있는 경우)는 제너레이터가 해당 지점
 //에 생성하는 값이다. 따라서 코드 6-7에서 yield n;이 1,2,3이 생성되면 완료.
 //제너레이터 사용코드는 for-of를 이용해 이를 확인함(제너레이터도 이터레이터임)
 
