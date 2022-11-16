const person = getThePerson();
console.log("The person is " + person.firstName + " "  + person.lastName);

// 과거 습관 : 함수에서 객체를 가져와 변수에 기억한 다음 소수의 속성만 사용.

const {firstName, lastName} = getThePerson();
console.log("The person is " + firstName + " " + lastName);

// 새로운 습관 : 추후에 객체 자체가 필요하지 않다면 디스트럭처링 사용.

