const mySymbol = Symbol();
const obj = {
  [mySymbol] : 6 // 계산된 속성 이름
};
const anotherSymbol = Symbol();
obj[anotherSymbol] = 7; // 대괄호표기법
console.log(obj[mySymbol]); // 6
console.log(obj[anotherSymbol]); // 7

// Symbol(my symbol)//심볼 함수를 호출하면 새롭고 고유한 심볼을 얻을수있음. 생성자가 아니고, 
//기본요소이므로 new를 사용하지않는다.
//심볼이 있다면 생성중에 계산된 속성 이름표기법 사용하거나 생성후 대괄호
//표기법을 사용하여 객체에 추가한다.
 
