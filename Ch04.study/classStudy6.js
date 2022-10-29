//불투명도 속성을 사용해 ColorWithAlpha라는 Color 서브 클래스 만들어보겠다.


class colorWithAlpha extends color {

}

//위의 코드가 서브클래스 생성하기위해 해야하는 작업의 전부임. 다음과 같은 작업수행
//ColorWithAlpha 서브클래스 생성자를 만든다
//Color(슈퍼클래스 생성자 함수)ColorWithAlpha의 프로토 타입을 만들어 color의 
// 모든정적속성/메서드를 colorwithAlpha에서 접근할수 있도록 한다.
//서브클래스 프로토타입 객체인 ColorwithAlpha.prototype을 만든다
//Color.prototype을 객체의 플토타입으로 만들어온 새로운 colorwithAlpha로 만든
//객체가 슈퍼클래스 속성과 메서드를 상속하게함.
