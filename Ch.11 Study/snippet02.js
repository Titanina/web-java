ArrayObject = Array.from(items[, mapFn[, thisArg]])

// Array.of와 마찬가지로 Array.from은 전달한 인수를 기반으로 배열을 생성한다.
//개별 값을 사용하는 대신 이터러블이나 배열과 유사한 객체를 첫번쨰 인수로
//받아들이고 해당 객체의 값을 사용해 배열을 만들고 선택적으로 매핑함수 적용.
//Array.from null 또는 undefined를 제공하면 오류가 발생.
// 이터러블이 아니거나, 배열과 유사하지않은 거의 모든경우에는 빈배열 반환.

const str = "123";
const a = Array.from(str);
console.log(a); // ["1", "2", "3"]

//다음은 배열과 유사한 객채에서 배열을 구축하는 예이다.
//(속성 이름 "0"과 "1"은 숫자 리터럴로 작성할수 있지만 결국 문자열로 끝나므로
//여기서는 강조를 위해 문자열 사용.)

const a = Array.from{(length: 2, "0" : "one, "1" : "two)};
console.log(a); // ["one", "two"]

//Array.from은 선택적 두 번째 인수인 mapFn을 허용한다. 이 인수는 배열에 추가될 떄
//각 값에 적용할 매핑 함수이다. 예를 들어 숫자가 포함된 문자열을 가져와 
//숫자 배열을 숫자로 얻으려면 mapFn으로 변환 함수 전달.

const str = "0123456789";
const a = Array.from(str, Number);
console.log(a); // [0, 1, 2, 3, ,4 ,5, 6, 7, 8, 9]

//매핑 함수의 시그니처는 mapFn(value, index)이다. 여기서 value는 매핑되는 값
//index는 결과 배열에서 새값이 가질 인덱스다. 
