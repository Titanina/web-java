let name = "foo" + Math.floor(Math.random() * 1000);
//여기서 'TheClass'를 사용하려고하면 Temporal Dead zone 때문에 
//ReferenceError가 발생한다.

//선언
class TheClass {

  // 선언은 단계별 코드의 일부로 처리되기 때문에
  // 여기에서 `name`을 사용할 수 있으며 위에서 할당한 값을 가진다.
  [name]() {
    console.log("This is the method" + name);
  }
} // 세미콜론이 필요하지 않음.

console.log(typeof TheClass); //전역이 생성됨, "function"

console.log(typeof this.TheClass); //전역 객체에대한 속성이없음. "underfined"

//class 표현식에는 function 표현식과 매우 유사하게 작동함.
//명명된 방식과 익명 방식이 모두 존재
//클래스 이름이 나타나는 범위에 클래스 이름을 추가하지않지만, 클래스 정의 자체 
//내에서 클래스 이름 사용할수있게함(이름이 잇는경우)
//변수나 상수에 할당되거나 함수에 전달되거나 무시될수있는값(클래스 생성자)에 생성
//자바스크립트 엔진은 익명함수식에 대해 3장에 배운것과 동일한 규칙사용. 컨텍스트
//에서 익명클래스식으로 만든 클래스의 name 속성값을 유추함.
//할당의 오른쪽으로 사용되는경우 할당식을 종료하지않는다. 클래스 표현식이 할당식의
//마지막 엔트리인경우 뒤에서 세미콜론이 와야한다.

