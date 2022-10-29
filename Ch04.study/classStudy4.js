class color {
  constructor (r = 0 , g = 0, b = 0){
    //인스턴스 속성 추가
    this. r = r;
    this. g = g;
    this. b = b;



  }
}

//매개변수에서 가져온 속성에 추가하여(또는 대신에) 생성자 인수에서 가져오지않는
//속성으로 설정할수있다. 리터럴이나 다른곳에서 가져온 값만 사용가능.
// 예를들어 모든 color 인스턴스가 검은색으로 시작되도록 하려면 r,g,b 매개변수 생략
//하고 r,g,b속성이 모두 0값으로 시작하도록 할수있다.

class color {
  constructor() {
    this. r = 0;
    this. g = 0;
    this. b = 0;


  }
}

