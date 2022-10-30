const p1 = {
  greet : function() {
    console.log("p1 grret, name = " + this.name);
  }
};

const p2 = {
  greet: function() {
    console.log("p2 greet, name = " + this.name);
  }
};

const obj = Object.create(p1);
obj.name = "Joe";
obj.greet(); // p1 greet, name = Joe
obj.__proto__ = p2;
obj.greet(); // p2 greet, name = Joe

// __proto__는 Object.prototype에 의해 정의된 접근자 속성이므로 사용하는 객체는
//Object.prototype에서 (직간접적으로) 상속해야 사용할수있다. 
