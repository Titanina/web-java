class color {
  constructor(r = 0, g =0,  b= 0) {
    this.r = r;
    this.g = g;
    this.b = b;

  }

  //프로토타입 메서드 추가

  toString() {
    return "rgb(" + this.r + ", " + this. g + ", " + this.b + ") ";
  }
}

// 생성자 정의와 toString 정의 사이엔 쉼표가 없다. 객처 리터럴에 있는경우도
// 마찬가지. 클래스 정의는 객체 리터럴과 다르다 쉼표로 구분하지 않는다.
