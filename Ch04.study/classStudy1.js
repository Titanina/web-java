class Color {

  constructor(r = 0, g = 0, b= 0) {
    this.r = r;
    this.g = g;
    this.b = b;

  }

  get rgb() {
    return "rgb(" + this.r + ", "+ this.g + ", " + this. b + ")";
  }

  set rgb(value) {

  }

  toString() {
    return this.rgb;
  }

  static fromCSS(css) {

  }


}
let c = new Color(30, 144, 255);
console.log(String(c));
c = Color.fromCSS("00A");
console.log(String(c));

