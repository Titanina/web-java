const obj = {"my-name" : 1};
const myName = obj["my-name"];
console.log(myName); // 1

//수동으로 수행하는 경우 그냥 다른 이름을 사용하자.

const obj = {first : 1};
const {first : myName} = obj;
console.log(myName) ; // 1

//속성 이름이 유효한 식별자 이름인데 어떤 이유로 그 이름을 사용하지 않으려면
//따옴표가 필요하지 않다.

const arr = [1, 2, 3, 4, 5];
const {1 : b, 4 : e} = arr;
console.log(b, e); // 2, 5

//패턴에 간격을 두는 특정 인덱스 집합을 보완한것이다.배열은 객체이기에
//객체 디스트럭처링을 사용해 더욱 명확하게 한것이다.

