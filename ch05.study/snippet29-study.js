//동적이름 으로 속성 만들떄 계산된 구문 사용
//과거 습관 :객체를 만든 이후, 두번쨰 단계로 런타임에 이름 결정된 속성 생성

let name = "answer";
let obj = {};
obj[name] = 42;
console.log(obj[name]); // 42

//새로운 습관 : 계산된 속성 이름을 그냥 사용.

let name = "answer";
let obj = {
  [name] : 42
};
console.log(obj[name]); // 42




//이름이 같은 변수에서 속성을 초기화 할떄 단축 구문을 사용
//과거 습관 :속성값이 동일한 이름의 범위내 식별자(예:변수)에서 오는 경우에도
//속성이름 제공

function getMinMax() {
  let min, max;
  // ...
  return {min : min, max : max};

}

//새로운 습관 : 단축 속성 구문을 사용하자.
function getMinMax() {
  let min, max;
  // ...
  return (min, max);
}
