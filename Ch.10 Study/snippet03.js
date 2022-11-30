const a = ["one", "two", "three"];
console.log(`Complex: ${
  a.reverse()
  .join()
  .toUpperCase()
}`); //  "Complex: THREE,TWO,ONE"

//치환본문의 표현은 어떤식으로도 제한되지 않는다. 완전한 표현문이다.
//템플릿 리터럴을 템플릿 리터널 내에 넣을수 있음을 의미하지만 읽고 유지하는 것이
//빠르게 어려워질수 있다.

const a = ["text", "from", "users"];
const lbl = "Label for user";
const userContent = `${lbl}: ${a.join()}`;
show(`<div>${escapeHTML(userContent)}</div>`);

//템플릿 리터럴 내에서 모든 표준 이스케이프 시퀀스는 문자열 리터럴에서와
//같이 작동한다. 템플릿에 식제 백슬래시를 넣으려면 문자열 리터럴에서처럼  
// \\로 이스케이프 해야한다.
