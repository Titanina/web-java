const arr = [
  {name : "one", value: 1},
  {name : "two", value: 2},
  {name : "forty-two", value : 42}
];

for (const {name, value} of arr){
  console.log("Name: " + name + ", value: " + value);
}

//객체 배열이 있고 객체의 이름 및 값 속성을 사용하여 반복하려고 한다고 가정

const obj = {a: 1 , b :  2, c: 3};
for (const name in obj) {
  if (obj.hasOwnProperty(name)) {
    const value = obj[name];
    console.log(name + " = " + value);
  }
}

//또는 객체가 있고 자신의(상속되지않음) 속성 이름 및 값 반복하려고 한다고 가정하자.
//for in 루프를 사용해야할것.

const obj = {a : 1, b: 2, c: 3};
for (const [name, value] of Object.entries(obj)) {
  console.log(name + " = " + value);
}

//for-of 루프와 Object.entries 함수를 사용해 hasownPropertycheck 제거 가능.


