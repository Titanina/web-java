console.log("now testing" .startsWith("test")); // false
console.log("now testing".startsWith("test", 4)); // true

//startsWith 시작 인덱스를 전달하면 문자열이 해당 인덱스에서 시작된것처럼 처리한다.
//인덱스가 문자열 길이보다 크거나 같으면 해당 지점의 문자열에 일치할 수 있는
//엔트리가 없기 떄문에 호출결과는 false가 된다(공백이 아닌 부분 문자열을 전달
//하는경우) endwith 종료 인덱스를 전달하면 문자열이 해당 인덱스에 끝난거처럼 
//처리 된다.

console.log("testing".includes("test")); // true
console.log("testing".includes("test", 1)); //false

//include는 호출한 문자열에 전달한 부분 문자열이 포함되어잇는지 확인하고
//선택적으로 문자열의 지정된 위치에서 시작하는지 확인한다.
