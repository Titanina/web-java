const p1 = {
  greet : function() {
    console.log("p1 greet, name= " + this.name);
  }
};

const p2 =  {
  greet : function() {
    console.log("p2 greet, name = " + this.name);
  }
};

const obj = Object.create(p1);
obj.name = "Joe";
obj.greet(); // p1 greet, name = Joe
Object.setPrototypeOf(obj, p2);
obj.greet(); // p2 greet, name = Joe

//이 코드에서 obj은 프로토타입으로 p1을 사용하여 시작하므로 obj.greet()에 대한
//첫번쨰 호출은 p1의 인사를 사용하고 "p1 greet, name = Joe"를 표시한다.
//그런 다음 코드는 p2를 사용하도록 obj의 프로토타입을 변경하므로 두 번쨰 greet
//호출은 p2의 greet를 사용하고 대신 "p2 greet, name = Joe"를 표시한다.

