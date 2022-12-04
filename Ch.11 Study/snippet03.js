const str = "987654321";
const a = Array.from(str, parseInt);
console.log(a); // [9, NaN, NaN, NaN, Nan, 4, 3, 2, 1 ]

//parseInt는 두개의 매개변수를 허용한다. 두번쨰 매개변수는 사용할 기수이다.
//(숫자 기수 : 2진수의 경우, 2, 10진수의 경우 10 등)

const str = "987654321";
const a = Array.from(str, digit => parseInt(digit, 10));
console.log(a); // [9, 8, 7, 6 , 5,  4, 3, 2, 1 ]

//이터러블과 배열과 유사한 것에서 배열을 만드는것 외에도 Array.from에 또다른
//사용 사례는 범위 배열(range array)을 만드는 것이다. 주어진 범위의 숫자로
//채워진 배열이다. 

