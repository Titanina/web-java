arrayObject = Array.of(value0[, value1[, ... ]])

//Array of는 다음과 같이 이산 인수로 전달한 값을 포함하는 배열을 만들고 
//반환한다.

const a = Array.of("one", "two", "three");
console.log(a); // ["one", "two", "three"]

//배열 이니셜라이저를 사용할수있기에, 언뜻 보이게 불필요해보일수 있다.

const a = ["one", "two", "three"];
console.log(a); // ["one", "two", "three"]

//Array.of는 리터럴 양식이 없기 떄문에 배열 서브 클래스에 유용하다.

Class MyArray extends Array {
  niftyMethod() {
    // .....

  }
}

const a = MyArray.of("one", "two", "three");
console.log(a instanceof MyArray); // true
console.log(a); // ["one", "two", "three"]

// MyArray.of는 Array에 상속되며, Arrayof는 호출된 this를 충분히 똑똑하게 
// 볼수 있으며 생성자 인경우 해당 생성자를 사용하여 새 배열을 생성한다
// (생성자가 아닌 경우 Array.of는 기본적으로 Array를 사용한다.)
//따라서 재정의할 필요 없이 MyArray.of는 Myarray의 인스턴스를 만든다.

