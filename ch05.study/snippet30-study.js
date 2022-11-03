//기존 객체의 속성 기반으로 새 객체만들떄 스프레드 구문 사용
//과거 습관 : 사용자 지정 확장 또는 Object.assign을 사용하여 기존 객체의 속성
//기반으로 새 객체 만듬

const s1 = {a: 1, b: 2};
const s2 = {a: "updated", c : 3};
const dest = Object.assign({}, s1, s2);
console.log(dest); // {"a" : "updated", "b": 2, "c": 3}

//새로운 습관 : 속성 스프레드구문 사용.

const s1 = {a: 1, b: 2};
const s2 = {a: "updated", c : 3};
const dest = {...s1, ...s2};
console.log(dest); // {"a" : "updated", "b" : 2, "c" : 3}




//메서드에 메서드 구문 사용
//과거 습관: 객체의 메서드가 될 함수에 속성 이니셜 라이저(initializer)를 사용

const obj = {
  example : function() {
    //...
  }
};

//새로운 습관 : 메서드 구문 사용

const obj = {
  example() {
    //....
  }
};


//super를 사용하는 경우 메서드는 원래 객체에 대한 링크를 가지므로 
//다른 객체에 복사하면 새객체가아닌 원래 객체에대한 프로토타입 계속 사용.
//super를 사용하지 않는다면(그리고 eval을 사용하지 않으면) 좋은 자바스크립트 
//엔진이 해당 링크 최적화.



