class ColorWithAlpha extends Color {
  constructor(r = 0 , g = 0, b = 0 , a = 1){
    super (r , g , b);
    this.a = a;
  }
}

//ColorwithAlpha가 가장 먼저하는일은 super를 호출 r,g,b 매개변수 전달

var colorWithAlpha = function colorWithAlpha(r, g, b, a) {
  Color.call(this, r, g , b);
  this. a = a;
};

//Color.call(this, r,  g, b)는 super(r, g , b)와 거의 동일하지만 중요한 
//차이점이 있다. ES5에서는 ColorwithAlpha의 첫번쨰 줄이 실행되기전에 객체가
//생성되었다. 원하는경우 두줄을 뒤집을수 있다.

var ColorWithAlpha = function ColorWithAlpha(r , g,  b , a){
  this.a = a; // Color를 호출하기 전이라도 동작함.
  Color.call(this, r, g ,b);
}

//클래스에서는 그렇지 않다. ColorwithAlpha의 코드 시작부분에서 객체는 아직
//생성되지않아 사용하려하면 오류가 발생. 객체생성된후에 사용가능. 
//super 호출할때까지는 생성되지않는다.
