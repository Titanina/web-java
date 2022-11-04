const obj = example({});
//다음과 같이 answer나 question 속성이 없는 객체로 호출하는 경우 그순서는
//코드가 속성을 추가하는 순서이므로 answer 다음에 question이 된다.

const obj = example({question: "what's the meaning of Life?"});
