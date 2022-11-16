//과거 습관 : 옵션이 많은 함수에 옵션 객체를 고려함.
//새로운 습관 : 디스트럭처링 사용 고려.

function doSomethingNifty(options) {
  options = Object.assign({}, options, {
    // 옵션의 기본값
    one: 1,
    two: 2,
    three : 3,
    four : 4
});
if (option.five === undefined) {
  options.five = options.one * 5;
}
console.log("The 'five' option is: " + options.five);
  // ..
}
doSomethingNifty(); // The 'five' option is: 5

//이는 함수 코드 내부의 기본값을 숨기고, 복잡한 기본값은 특수한 경우여야하며
// 옵션을 사용할때마다 옵션 객체에 대한 속성 접근 수행을 의미
// 대신 기본 옵션을 디스트럭처링 기본값 정의하고, 디스트럭처링 기본값 내에서
//five의 기본값을 처리하고 매개변수 기본값에 대한 결과 바인딩을 직접 사용가능.

function doSomethingNifty({
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = one * 5

} = {}) {
  console.log("The 'five' option is: " + five);
  //....
}
doSomethingNifty(); // The 'five' option is: 5