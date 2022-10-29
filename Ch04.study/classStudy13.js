let name = "foo" + Math.floor(Math.random() * 1000);

//표현식

const C = class TheClass{
  [name]() {
    console.log("This is the method" + name + "in the class " + TheClass.name);
    //The class name is in-scope -^
    //within the definition
  }
}; // 세미클론 필요.

console.log(typeof TheClass); //클래스 이름이 이 영역에 추가되지않았음. 
//"undefined"

console.log(typeof C); //표현식의 값은 클래스, "fucntion"
