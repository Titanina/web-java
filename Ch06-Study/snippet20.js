const array = [23, 42, 17, 27];
console.log(Math.min.apply(Math.array)); // 17

// 과거습관 : 함수에 개별 인수를 제공하기위해 배열 사용할떄
//function.prototype.apply 를 사용.


const array = [23, 42, 17, 27];
console.log(Math.min(...array)); // 17

//새로운 습관 : 스프레드를 사용.
