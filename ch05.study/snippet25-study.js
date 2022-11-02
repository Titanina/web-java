//Object.getOwnPropertyDescriptors은 객체의 모든 속성에 대한 속성 설명자가 있는
//객체를 반환한다(열거할수 없는 속성과 문자열이 아닌 심볼로 키가 지정된 속성 포함)
//한가지 용도는 반환하는 객체를 다른객체의 Object.defineProperties에 전달하여 
//정의를 해당 객체에 복사.

const s = Symbol("example");
const o1 = {
  // 심볼로 명명된 속성
  [s]: "one",
  // 접근자 속성
  get example() {
    return this[s];
  },
  set example(value){
    this[s] = value;
  },
  //데이터 속성
  data : "value"
};
//열거할 수 없는 속성
Object.defineProperty(o1, "nonEnum", {
  value: 42,
  writable : true,
  configurable : true
});
//해당 속성을 새 객체에 복사

const descriptors = Object.getOwnPropertyDescriptors(o1);
const o2 = Object.defineProperties({}, descriptors);
console.log(o2.example); // "one"
o2.example = "updated";
console.log(o2[s]); // "updated", [s]에 작성된 접근자 속성
console.log(o2, nonEnum); // 42
console.log(o2.data); // "value"

//접근자 속성을 접근자 속성으로 복사하지않는 동일한 상황에서 Object.assign을
//사용하는 것과 반대된다. 대신 Object.assign이 호출되었을떄 접근자 속성에서 
//반환한 값을 복사한다. 또한 열거할 수 없는 속성을 복사하지않는다.