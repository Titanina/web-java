const p =  {
  hi() {
    console.log("h1");
  }
};
const name = "__proto__";
const obj = {
  [name]: p
};

obj.hi(); 

//새코드에서 __proto__를 사용하지마라. Object.create를 사용해 처음에는
// 올바른 프로토타입으로 객체를 만들고 필요한경우에 Object.getPrototype of
//및 Object.setPrototypeOf를 사용하여 나중에 프로토타입을 가져오거나 설정한다.
//이렇게하면 코드가 브라우저에서 실행중인지 여부와 (접근자 속성)인경우 객체가
//Object.prototype에 상속되는지 여부에 대해 걱정할 필요없다.