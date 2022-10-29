function example() {
    console.log(new.target);
}
example(); // 이러한경우 new.target를 사용하여 함수가 어떻게 호출되었는지 확인
//할수있다. new.target은 undefined의 값을 갖는다.

class Base {
  constructor() {
    console.log(new.target.name);
  }
}
new Base();
//현재 함수가 new 연산자의 직접 대상인경우, new.target은 현재 함수를 참조한다.


class Base {
  constructor() {
    console.log(new.target.name);
  }
}

class Sub extends Base {
  //이것은 정확히 기본생성자가 될것이지만
  // 명확성을위해 `super()` 호출을 명시적으로 표시한다.
  constructor() {
    super();
  }
}

new Sub(); // "Sub"

