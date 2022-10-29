var Color = function Color(r, g, b){
  this.r = r;
  this.g = g;
  this.b = b;

};
Color.prototype.toString = function toString() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
};
console.log(String(new Color(30,144,255)));

//class를 배우기전에는 전통적인 함수 구문을 사용해 생성자 함수를 생성해야만 했다.


class Color {
    constructor(r,g,b) {
      this.r = r;
      this.g = g;
      this.b = b;

    }
    toString() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }
};
console.log(String(new Color(30,144,255)));

//class를 배운이후엔 클래스를 사용하면 된다.

