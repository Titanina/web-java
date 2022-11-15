function example({a,b}) {
  console.log(a, b);

}

const o = {a: "ayy", b: "bee", c: "see", d: "dee"};
example(o); // "ayy", "bee"
example({a: 1, b: 2}); // 1, 2

// 디스트럭처링은 할당만을 위한것이 아닌, 함수 매개변수도 가능하다.
//매개변수 목록에 사용된 객체 디스트럭처링({a, b})에 주목하자.
//이 example은 다음코드와 거의 같게 하나의 매개변수를 받아 두개의 로컬 바인딩으로
//디스트럭처링 한다.
