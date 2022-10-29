class Color  {

  //생성자 추가
  constructor(r = 0, g = 0, b = 0) {
    this.r  = r;
    this.g = g;
    this.b = b;

  }
}

//위 코드는 클래스 식별자인 color 와 연관될 함수 정의.
//function 이라는 키워드는 사용하지않고 constructor라고만 적고
//여는 괄호, 매개변수 목록(r, g, b) 닫는 괄호, 정의할 중괄호만 사용했다.
//생성자 본문에는 즉 해당 중괄호 내 생성자 코드만 작성.
